import cors from 'cors'
import { Application, json } from 'express'
import log from '../middlewares/log'

export default function setupMiddleware(app: Application): void {
  app.use(json())
  app.use(cors())
  app.use(log)
}
