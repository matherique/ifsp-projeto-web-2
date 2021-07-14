import express from 'express'
import setupMiddleware from './middleware'
import setupRoutes from './routes'

const app = express()
app.use(express.json())
setupRoutes(app)
setupMiddleware(app)

export default app
