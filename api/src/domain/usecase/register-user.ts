export type RegisterUserParams = {
  name: string
  email: string
  password: string
}

export type RegisterUserResponse = boolean

export interface RegisterUserUseCase {
  handle(data: RegisterUserParams): Promise<RegisterUserResponse>;
}