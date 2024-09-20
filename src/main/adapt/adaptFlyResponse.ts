import { PromiseWithChild } from "child_process";

export async function adaptFlyReponse(execCommand: PromiseWithChild<{stdout: string, stderr: string}>): Promise<{status: "err", err: string} | {status: "OK", data: {stdout: string, stderr: string}}>{
    try {
        const response = await execCommand

        return {
            status: "OK",
            data: response
        }
    } catch (err: any) {
        return {
            status: "err",
            err: err.message
        }
    }
}