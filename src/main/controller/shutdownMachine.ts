import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { shutdownMachineService } from "../../service/shutdownMachineService";

export async function shutdownMachineController(req: FastifyRequest, reply: FastifyReply){
    const machineParamsSchema = z.object({
        machineId: z.string()
    })

    const { machineId } = machineParamsSchema.parse(req.body)

    const response = await shutdownMachineService(machineId)

    return reply.status(response.statusCode).send({
        message: response.data
    })
}