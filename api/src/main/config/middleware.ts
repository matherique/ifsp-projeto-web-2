import cors from 'cors'
import { Application, json } from 'express'

export default function setupMiddleware(app: Application): void {
  app.use(json())
  app.use(cors())
}
