import { ApiError } from './apiError.ts'
export default class FetchError extends ApiError{
    constructor(message:string,
            status?:number,
            response?:Response,
            data?:any,
            config?:any,
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