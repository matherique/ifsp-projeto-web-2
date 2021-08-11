import { Router } from 'express'
import { Connection } from 'typeorm'
import { adaptRoute } from '../adapter/express-router'
import { makeGenerateCountryReportController } from '../factories/generate-country-report-controller'
import makeGetAllCountriesController from '../factories/get-all-countries-controller'
import makeGetCountryReportDataController from '../factories/get-country-report-data-controller'
import authentication from '../middlewares/authentication'
import authorization from '../middlewares/authorization'

export default (router: Router, connection: Connection): void => {
  router.get(
    '/country',
    authentication,
    adaptRoute(makeGetAllCountriesController(connection))
  )
  router.get(
    '/country/report',
    authentication,
    authorization,
    adaptRoute(makeGetCountryReportDataController(connection))
  )
  router.get(
    '/country/report/print',
    authentication,
    authorization,
    adaptRoute(makeGenerateCountryReportController(connection))
  )
}
