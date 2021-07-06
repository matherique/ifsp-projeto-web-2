export type SignInResponse = string

export interface SignInUseCase {
  handle: (email: string, password: string) => Promise<string>;
}