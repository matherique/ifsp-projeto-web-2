import { Application, Router } from "express";
import { readdirSync } from "fs";
import connect from './database'

export default async function setupRoutes(app: Application): Promise<void> {
  const connection = await connect()

  const router = Router();
  app.use("/api", router);
  readdirSync(`${__dirname}/../routes`).map(async file => {
    (await import(`../routes/${file}`)).default(router, connection)
  })
}
