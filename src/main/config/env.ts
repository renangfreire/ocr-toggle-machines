import "dotenv/config"
import { z } from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
    HOST: z.string().default("0.0.0.0"),
    FLYEMAIL: z.string().email(),
    FLYPASSWORD: z.string(),
    NODE_ENV: z.enum(["dev", "prod"]).default("prod"),
    BAUTH_USER: z.string(),
    BAUTH_PASSWORD: z.string()
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
    console.error("Invalid environment variable: ", _env.error.message)
    throw new Error("Invalid environment variable")
}

export const env = _env.data