export type DeleteUserParam = string

export type DeleteUserResponse = boolean

export interface DeleteUserUsecase {
  handle(id: DeleteUserParam): Promise<DeleteUserResponse>
}
