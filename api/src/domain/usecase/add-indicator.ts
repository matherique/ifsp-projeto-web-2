export type FileData = {
  name: string
  data: Buffer
}
export type AddIndicatorParams = {
  data: Buffer
}

export type AddIndicatorResponse = boolean

export interface AddIndicatorUseCase {
  handle(data: AddIndicatorParams): Promise<AddIndicatorResponse>
}
