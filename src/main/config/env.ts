import "dotenv/config"
import { z } from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().default(3000)
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
    console.error("Invalid environment variable: ", _env.error.message)
    throw new Error("Invalid environment variable")
}

export const env = _env.data