import { app } from "./main/config/app"
import { env } from "./main/config/env"

app.listen({
    port: env.PORT,
    host: env.HOST,
}, () => {
    console.log("listening at port", env.PORT)
})