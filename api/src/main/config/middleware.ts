import cors from 'cors'
import { Application, json, urlencoded } from 'express'
import log from '../middlewares/log'

export default function setupMiddleware(app: Application): void {
  app.use(cors())
  app.use(urlencoded({ extended: true }))
  app.use(json())
  app.use(log)
}
