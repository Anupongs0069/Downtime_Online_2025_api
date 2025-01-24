import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { cors } from "@elysiajs/cors";
import { UseController } from "./controllers/UseController";

const app = new Elysia()
.use(jwt({
  name: "jwt",
  secret: "secret",
}))
.use(cors())
.get("/", () => "Hello Elysia")
.post("/api/user/signin", UseController.signIn)
.listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
