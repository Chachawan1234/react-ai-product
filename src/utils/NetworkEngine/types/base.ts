import { ApiError } from "../core/ApiError";
import type { FetchConfig } from "./fetch";

export interface BaseHooks {
    beforeRequest?: Array<(req: any, config: BaseConfig) => any | Promise<any>>;
    onError?: Array<(error: ApiError) => void | Promise<any>>;
    onAllSettled?: Array<(
        data: any, error: ApiError | null, config: BaseConfig
    ) => void | Promise<any>>;
// 监听不设置返回，所以void

}
export interface BaseConfig {
    baseURL: string;//基础URL
    timeout?: number;//超时时间
    hooks?: BaseHooks;
    fetch?: FetchConfig;
}
// 测试