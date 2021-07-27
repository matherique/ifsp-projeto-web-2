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

type Response = {
  [key: string]: {
    [key: string]: number
    year: number
  }[]
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

      const resp: Response = {}

      for (const indicator_id of indicators) {
        const data = await this.getIndicatorDataUsecase.handle({
          countries,
          indicators: [indicator_id],
          yearStart: start,
          yearEnd: end
        })

        let yearData = []

        for (let i = start; i <= end; i++) {
          yearData.push({ year: +i })
        }

        for (const d of data) {
          yearData = yearData.map(r => {
            if (r.year === d.year) {
              return { ...r, [d.country_id]: d.value }
            }

            return r
          })
        }

        Object.assign(resp, { [indicator_id]: yearData })
      }

      return ok(resp)
    } catch (error) {
      console.error(error)
      return internalServerError(error.message)
    }
  }
}
