export {BaseConfig} from './base';
export interface FetchConfig extends BaseConfig,
RequseInit{
    retry?:number;//重试次数
    hooks?:BaseConfig["hooks"] & {
        afterResponse?: Array<(res:Response,config:FetchConfig)=>Response | Promise<any>>;
        beforeRetry?:Array<(req:Request,config:FetchConfig,error:ApiError,retryCount:number)=>
            Request>
    }
}