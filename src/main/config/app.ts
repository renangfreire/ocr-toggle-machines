import Fastify from "fastify";
import { appRoutes } from "../routes";
import { env } from "./env";
import { execSync } from "../utils/execSync";

import { configureAuth } from "./auth";
import fastifyBasicAuth from "@fastify/basic-auth";

export const app = Fastify({
    // logger: true
}) 

app.register(appRoutes)

configureAuth(app)

// Login in FLY.io
if(env.NODE_ENV !== "dev"){
    execSync(`fly auth login --email "${env.FLYEMAIL}" --password "${env.FLYPASSWORD}" --otp true`).then(({stdout}) => console.log(stdout));
}