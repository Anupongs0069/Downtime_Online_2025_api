import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { cors } from "@elysiajs/cors";
import { UseController } from "./controllers/UseController";
import { DeviceController } from "./controllers/DeviceController";

const app = new Elysia()
  .use(jwt({
    name: "jwt",
    secret: "secret",
  }))
  .use(cors())
  .get("/", () => "Hello Elysia")
  .post("/api/user/signin", UseController.signIn)
  .put("/api/user/update", UseController.update)

  // Device
  .post("/api/device/create", DeviceController.create)
  .get("/api/device/list", DeviceController.list)
  .put("/api/device/update/:id", DeviceController.update)
  .delete("/api/device/remove/:id", DeviceController.remove)

  // listen
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
