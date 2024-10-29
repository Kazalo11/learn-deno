import { Application, Router } from "https://deno.land/x/oak@v17.1.2/mod.ts";

const app = new Application();

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello world"
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({port: 8080})
