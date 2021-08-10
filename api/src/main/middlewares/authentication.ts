import { NextFunction, Request, Response } from 'express'
import {
  badRequest,
  internalServerError
} from '../../controllers/ports/controller'
import { UserPermission } from '../../domain/models'
import { JWTAdapter } from '../../infra/cryptography/jwt-adapter'
import { SECRET } from '../config/env'

export type TokenData = {
  id: string
  permission: UserPermission
}

export type RequestWithUser = { user?: TokenData } & Request

export default async function authentication(
  request: RequestWithUser,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const token = request.headers['authorization']?.replace('Bearer ', '')

    if (!token) {
      const msg = badRequest('missing token')
      response
        .status(msg.status)
        .json({ error: msg.error, message: msg.message })
      return
    }

    const jwt = new JWTAdapter(SECRET)
    const payload = await jwt.decode<TokenData>(token)

    request.user = payload

    next()
  } catch (error) {
    const msg = internalServerError(error.message)
    response.status(msg.status).json({ error: msg.error, message: msg.message })
    return
  }
}
