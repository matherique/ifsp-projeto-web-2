import {
  badRequest,
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'
import AdmZip from 'adm-zip'
import { AddIndicatorUseCase } from '../domain/usecase/add-indicator'
import { AddCountryUsecase } from '../domain/usecase/add-country'
import { AddIndicatorDataUsecase } from '../domain/usecase/add-indicator-data'
import { QueryFailedError } from 'typeorm'

export class AddIndicatorController implements Controller {
  constructor(
    private readonly addIndicatorUsecase: AddIndicatorUseCase,
    private readonly addCountryUsecase: AddCountryUsecase,
    private readonly addIndicatorDataUsecase: AddIndicatorDataUsecase
  ) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse> {
    try {
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

      await this.addIndicatorDataUsecase.handle({
        data: indicatorDataFile.getData()
      })

      return ok({ ok: true })
    } catch (error) {
      if (error instanceof QueryFailedError) {
        return badRequest('already exists this indicator')
      }
      return internalServerError(error.message)
    }
  }
}
