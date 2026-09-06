import type { FetchConfig } from '../types/fetch.ts';
import { ApiError } from './ApiError.ts';
export default class FetchError extends ApiError<FetchConfig>{
    constructor(message:string,
            status?:number,
            response?:Response,
            data?:any,
            config?:FetchConfig,
            )
    {
        super(message,
            status,
            response,
            data,
            config,
            "FetchError",
        );

        Object.setPrototypeOf(this, FetchError.prototype);
    }
}