import { exec } from "child_process";
import { promisify } from "node:util"
import { adaptFlyReponse } from "../main/adapt/adaptFlyResponse";

const execPromise = promisify(exec)

export async function shutdownMachineService(machineId: string) {
    const execRes = await adaptFlyReponse(execPromise(`fly machine stop ${machineId}`))
    if(execRes.status === "err") return {
        statusCode: 400,
        data: execRes.err
    }

    const { stdout, stderr } = execRes.data

    console.log(stdout)

    return {
        statusCode: 200,
        data: "Machined stopped successfully"
    }
}