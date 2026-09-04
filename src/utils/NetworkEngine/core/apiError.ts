import type { BaseConfig } from "../types/base";

export type ErrorType='ApiError' | 'FetchError' | 'TimeoutError' | 'AbortError' | 'SseError' | 'WebSocketError' | 'WebTransportError';
// 自定义api错误，确保js引擎捕获堆栈追踪，在控制台显示错误信息
export class ApiError<T extends BaseConfig =BaseConfig> extends Error{
    status?:number;//http状态码
    response?:Response;//http响应对象
    data?: any;//api返回数据
    config?:T;//请求配置
    constructor(
        message:string,
        status?:number,
        response?:Response,
        data?:any,
        config?:T,
        name?:ErrorType
    ){
        super(message);
        this.status=status;
        this.response=response;
        this.data=data;
        this.config=config;
        this.name=name || 'ApiError';//设置无name时默认传递apiError

        // 修复原型链，确保instanceof能正常工作
        Object.setPrototypeOf(this,ApiError.prototype);
    }

}