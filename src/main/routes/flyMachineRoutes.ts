import { FastifyInstance, fastify} from "fastify";
import { startMachineController } from "../controller/startMachine";
import { shutdownMachineController } from "../controller/shutdownMachine";

export async function flyMachineRoutes(app: FastifyInstance){
    app.post("/start", startMachineController)

    app.post("/shutdown", shutdownMachineController)
}