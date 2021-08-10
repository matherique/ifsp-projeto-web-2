import { Router } from 'express'
import { Connection } from 'typeorm'
import { adaptRoute } from '../adapter/express-router'
import authentication from '../middlewares/authentication'
import handleUpload from '../middlewares/file-upload'
import makeAddIndicatorController from '../factories/add-indicator-controller'
import makeGetAllIndicatorsController from '../factories/get-all-indicators-controller'
import makeGetIndicatorDataController from '../factories/get-indicator-data-controller'
import makeGetIndicatorReportDataController from '../factories/get-indicator-report-data-controller'
import { makeGenerateIndicatorReportController } from '../factories/generate-indicator-report-controller'
import authorization from '../middlewares/authorization'

export default (router: Router, connection: Connection): void => {
  router.post(
    '/indicator',
    authentication,
    authorization,
    handleUpload,
    adaptRoute(makeAddIndicatorController(connection))
  )
  router.get(
    '/indicator',
    authentication,
    adaptRoute(makeGetAllIndicatorsController(connection))
  )
  router.get(
    '/indicator/filter',
    authentication,
    adaptRoute(makeGetIndicatorDataController(connection))
  )
  router.get(
    '/indicator/report',
    authentication,
    authorization,
    adaptRoute(makeGetIndicatorReportDataController(connection))
  )
  router.get(
    '/indicator/report/print',
    authentication,
    authorization,
    adaptRoute(makeGenerateIndicatorReportController(connection))
  )
}
