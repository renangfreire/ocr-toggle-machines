import { FastifyInstance } from "fastify";
import { flyMachineRoutes } from "./routes/flyMachineRoutes";

export async function appRoutes(app: FastifyInstance){
    app.register(flyMachineRoutes, {
        prefix: "flyMachine"
    })
}