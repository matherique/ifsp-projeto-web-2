import { GetIndicatorDataUsecase } from '../domain/usecase/get-indicator-data'
import {
  badRequest,
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

type GetIndicatorDataBodyData = {
  countries: string[]
  indicators: string[]
  start: number
  end: number
}

export class GetIndicatorDataController implements Controller {
  constructor(
    private readonly getIndicatorDataUsecase: GetIndicatorDataUsecase
  ) {}

  async handle(
    request: HttpRequest<GetIndicatorDataBodyData>
  ): Promise<HttpResponse> {
    try {
      let { countries, indicators, start, end } = request.body

      if (!countries || !countries.length)
        return badRequest('select at least 1 country')

      if (!indicators || !indicators.length)
        return badRequest('select at least 1 indicators')

      if (!start) start = 1960
      if (!end) end = 2020

      const data = await this.getIndicatorDataUsecase.handle({
        countries,
        indicators,
        yearStart: start,
        yearEnd: end
      })

      let response = []

      for (let i = start; i <= end; i++) {
        response.push({ year: +i })
      }

      for (const d of data) {
        response = response.map(r => {
          if (r.year === d.year) {
            return { ...r, [d.country_id]: d.value }
          }

          return r
        })
      }

      return ok(response)
    } catch (error) {
      console.error(error)
      return internalServerError(error.message)
    }
  }
}
