import jwt, { decode } from 'jsonwebtoken'

import { TokenService, TokenServiceValidateResponse } from '../../usecase/ports'

export class JWTAdapter implements TokenService {
  constructor(private readonly secret: string) {}

  async encode(payload: any, expiresIn: number): Promise<string> {
    return jwt.sign(payload, this.secret, { expiresIn })
  }

  async decode<T = any>(token: string): Promise<T> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secret, (error, payload) => {
        if (error) {
          return reject('invalid token')
        }
        return resolve(payload as T)
      })
    })
  }

  verify(token: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
