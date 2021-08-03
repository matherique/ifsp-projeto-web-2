export type TokenServiceValidateResponse<T> = {
  data: T
}

export interface TokenService {
  encode(payload: any, expiresIn: number): Promise<string>
  decode<T = string>(token: string): Promise<T>
  verify(token: string): Promise<boolean>
}
