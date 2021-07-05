export type TokenServiceValidateResponse<T> = {
  data: T;
};

export interface TokenService {
  encode<T = any>(payload: T, expireIn: number): Promise<string>;
  decode<T = any>(token: string): Promise<TokenServiceValidateResponse<T>>;
  verify(token: string): Promise<boolean>;
}
