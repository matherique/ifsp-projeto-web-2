import { NextFunction, Response } from 'express'
import { internalServerError } from '../../controllers/ports/controller'
import { UserPermission } from '../../domain/models'
import { RequestWithUser } from './authentication'

export default async function authorization(
  request: RequestWithUser,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { user } = request

    if (user?.permission !== UserPermission.ADMIN) {
      response.status(403)
      return
    }

    next()
  } catch (error) {
    const msg = internalServerError(error.message)
    response.status(msg.status).json({ error: msg.error, message: msg.message })
    return
  }
}
