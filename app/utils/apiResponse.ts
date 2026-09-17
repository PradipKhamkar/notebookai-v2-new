import type { Response } from "express";

const success = (res: Response, output: any = {}, msg: string = 'Success', status = 200) => {
        return res.status(status).json({
                success: true,
                message: msg,
                results: output
        })
};


const error = (res: Response, message: string = 'Something went wrong', status = 500, extra = {}) => {
        return res.status(status).json({
                success: false,
                message,
                error: extra
        })
};


export default {
        success,
        error
}