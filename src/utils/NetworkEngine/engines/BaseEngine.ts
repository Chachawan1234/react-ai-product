import type { ApiError } from "../core/ApiError";
import type { BaseConfig } from "../types/base";

export abstract class BaseEngine<T extends BaseConfig = BaseConfig> {
    protected config: T;
    constructor(config: T) {
        this.config = config;
    }

    // 全局错误处理
    protected async handleError(err: ApiError<T>): Promise<void> {
        const hooks = this.config.hooks?.onError;
        return await this.runNotify(hooks, err);
    }
    // 通用监听器方法，并行执行，没有返回值
    protected async runNotify(hooks: Array<(...args: any[]) => void | Promise<void>> | undefined, ...args: any[]): Promise<void> {
        if (!hooks || hooks.length === 0) return;

        // 去重
        const _hooks = [...new Set(hooks)];

        // 并行执行，allSettled保证允许出现hooks出错
        await Promise.allSettled(_hooks.map(hook => hook(...args)));

    }

    // 通用拦截器，执行流水线操作。
    // @params hooks 钩子函数数组
    // @params input 初始对象
    // @params args 额外参数，比如config，error
    protected async runPipeline<V>(hooks: Array<(...args: any[]) => V | Promise<V>> | undefined, input: V, ...args: any[]): Promise<V> {
        let processed = input;
        // 处理后的值
        if (!hooks || hooks.length === 0) return processed;
        for (const hook of hooks) {
            const nextResult = await hook(processed, ...args);
            if (nextResult === undefined || nextResult === null) {
                console.warn(" [network engine]hooks 不能返回undefined或null");
            } else {
                processed = nextResult;
            }
        }
        return processed;
    }

    // 核心方法，合并全局配置及局部配置
    // @params base 全局配置
    // @params local 局部配置
    // @params isRoot 是否为根配置
    public static mergeConfig<T extends BaseConfig>(        
        base:T,
        local: Partial<T> = {},
        isRoot:boolean = true

    ):T{
        // 浅拷贝
        const result={...base} as any;
        for(const key in local){
            const val=local[key];
        // 处理hooks
        if(isRoot && key === 'hooks' && typeof val === 'object'){
            // 确保hooks不是被覆盖而是合并为一个队列
            result.hooks = this.#mergeHooks(base.hooks || {}, val || {})
        }
        // 处理baseUrl
        else if(isRoot && key === 'baseUrl' && typeof val==="string"){
            result.baseUrl = this.#mergeUrl(base.baseUrl,val)
        }
        //处理嵌套对象，eg.fetch,sse,ws
        else if(isRoot && val && ["fetch","sse","ws"].includes(key)&& typeof val === 'object'){
            const baseForEngine = {
                ...(base[key] || {}),
                hooks: this.#mergeHooks(
                    base.hooks || {},
                    (base[key] as any)?.hooks || {}),
                baseUrl:(base[key] as any)?.baseUrl||base.baseUrl
            };
            result[key] = this.mergeConfig(baseForEngine,val);
        }
        // 处理普通嵌套对象 ,eg.请求头header
        else if(isRoot && typeof val === 'object' &&
            !Array.isArray(val) && 
            !(val instanceof AbortSignal) && 
            !(val instanceof FormData)
            //保护abortSignal和formdata不被合并
        ){
            result[key] = this.mergeConfig(
                base[key] as BaseConfig,
                val,
                false,
            );
        }
        // 处理其他字段
        else{
            result[key] = val;
        }
        }
        return result;
    }

    static #mergeHooks(targetHooks:any,sourceHooks:any){
        // 目标浅拷贝
        const merged = {...targetHooks};

        // 获取所有hooks的keys,并获取他们的并集
        const allKeys=new Set([
            ...Reflect.ownKeys(targetHooks),
            ...Reflect.ownKeys(sourceHooks),
        ])
        allKeys.forEach(key=>{
            const targetHook=targetHooks[key];
            const sourceHook=sourceHooks[key];
            const targetArray=Array.isArray(targetHook)?targetHook : [targetHook];
            const sourceArray=Array.isArray(sourceHook)?sourceHook : [sourceHook];
            // 按顺序执行hooks，before开发的hooks执行顺序从全局到局部
            const combined=typeof key === 'string' && key.
            startsWith("before")
            ?[...targetArray,...sourceArray]
            :[...sourceArray,...targetArray];
            // 去重
            merged[key]=[...new Set(combined)];
        })
        return merged;
    }
    static #mergeUrl(baseUrl:string = '',localUrl:string=''):string{
        // base空则返回local，local为空同理
        if(!baseUrl) return localUrl;
        if(!localUrl) return baseUrl;

        // localUrl绝对路径，返回localUrl
        if(localUrl.startsWith('http://')|| localUrl.startsWith('https://')) {
            return localUrl;}

        // url拼接
        try{
            return new URL(localUrl,baseUrl).href;
        }
        catch{
            return baseUrl + localUrl;
        }
    }
} 