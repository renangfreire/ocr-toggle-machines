import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { startMachineService } from "../../service/startMachineService";

export async function startMachineController(req: FastifyRequest, reply: FastifyReply){
    const machineParamsSchema = z.object({
        machineId: z.string()
    })

    const { machineId } = machineParamsSchema.parse(req.body)

    const response = await startMachineService(machineId)

    return reply.status(response.statusCode).send({
        message: response.data
    })
}