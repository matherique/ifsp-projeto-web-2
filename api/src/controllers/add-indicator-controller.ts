import {
  badRequest,
  Controller,
  HttpRequest,
  HttpResponse,
  ok
} from './ports/controller'
import AdmZip from 'adm-zip'
import { AddIndicatorUseCase } from '../domain/usecase/add-indicator'
import { AddCountryUsecase } from '../domain/usecase/add-country'

export class AddIndicatorController implements Controller {
  constructor(
    private readonly addIndicatorUsecase: AddIndicatorUseCase,
    private readonly addCountryUsecase: AddCountryUsecase
  ) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse> {
    const { file } = httpRequest

    if (!file) return badRequest('missing file')

    const zip = new AdmZip(file.buffer)

    const indicatorFile = zip
      .getEntries()
      .find(f => f.entryName.startsWith('Metadata_Indicator'))

    const countryFile = zip
      .getEntries()
      .find(f => f.entryName.startsWith('Metadata_Country'))

    const indicatorDataFile = zip
      .getEntries()
      .find(f => f.entryName.startsWith('API'))

    await this.addCountryUsecase.handle({
      data: countryFile.getData()
    })

    await this.addIndicatorUsecase.handle({
      data: indicatorFile.getData()
    })

    return ok({ ok: true })
  }
}
