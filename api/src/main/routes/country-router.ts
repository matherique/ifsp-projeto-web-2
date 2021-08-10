import { Router } from 'express'
import { Connection } from 'typeorm'
import { adaptRoute } from '../adapter/express-router'
import { makeGenerateCountryReportController } from '../factories/generate-country-report-controller'
import makeGetAllCountriesController from '../factories/get-all-countries-controller'
import makeGetCountryReportController from '../factories/get-country-report-controller'
import auth from '../middlewares/auth'

export default (router: Router, connection: Connection): void => {
  router.get(
    '/country',
    auth,
    adaptRoute(makeGetAllCountriesController(connection))
  )
  router.get(
    '/country/report',
    auth,
    adaptRoute(makeGetCountryReportController(connection))
  )
  router.get(
    '/country/report/print',
    auth,
    adaptRoute(makeGenerateCountryReportController(connection))
  )
}
