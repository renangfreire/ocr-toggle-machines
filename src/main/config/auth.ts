import { FastifyInstance } from "fastify";
import { fastifyBasicAuth } from "@fastify/basic-auth"
import { env } from "./env";

export async function configureAuth(app: FastifyInstance){
    app.register(fastifyBasicAuth, {
        validate: async (user, password, _, reply) => {
            if(user !== env.BAUTH_USER || password !== env.BAUTH_PASSWORD) return new Error()
        }
    })
    
    app.after(async () => {
        app.addHook("preHandler", app.basicAuth)
    })
}