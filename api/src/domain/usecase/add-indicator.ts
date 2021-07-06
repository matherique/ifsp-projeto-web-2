export type AddIndicatorParams = {
  code: string;
  name: string;
  note: string;
  source_organization: string;
}

export type AddIndicatorResponse = boolean

export interface AddIndicatorUseCase {
  handle(data: AddIndicatorParams): Promise<AddIndicatorResponse>
}