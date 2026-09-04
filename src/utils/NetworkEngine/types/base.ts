import { ApiError } from "../core/apiError";

export interface BaseHooks {
    beforeRequest?: Array<(req: any, config: any) => any | Promise<any>>;
    onError?: Array<(error: ApiError) => any | Promise<any>>;
    onAllSettled?: Array<(
        data: any, error: ApiError | null, config: any
    ) => any | Promise<any>>;


}
export interface BaseConfig {
    baseURL: string;//基础URL
    timeout?: number;//超时时间
    hooks?: BaseHooks;
    fetch?:FetchConfig;
}
// 测试