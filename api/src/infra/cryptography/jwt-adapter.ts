import jwt from 'jsonwebtoken'

import { TokenService, TokenServiceValidateResponse } from "../../usecase/ports";

export class JWTAdapter implements TokenService {
  constructor(private readonly secret: string) {}
  
  async encode(payload: any, expiresIn: number): Promise<string> {
    return jwt.sign(payload, this.secret, { expiresIn })
  }

  decode<T = any>(token: string): Promise<TokenServiceValidateResponse<T>> {
    throw new Error('Method not implemented.');
  }

  verify(token: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

}