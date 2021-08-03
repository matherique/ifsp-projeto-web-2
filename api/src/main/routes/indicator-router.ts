import { Router } from 'express'
import { Connection } from 'typeorm'
import { adaptRoute } from '../adapter/express-router'
import makeAddIndicatorController from '../factories/add-indicator-controller'
import makeGetAllIndicatorsController from '../factories/get-all-indicators-controller'
import makeGetIndicatorDataController from '../factories/get-indicator-data-controller'
import handleUpload from '../middlewares/file-upload'
import auth from '../middlewares/auth'

export default (router: Router, connection: Connection): void => {
  router.post(
    '/indicator',
    auth,
    handleUpload,
    adaptRoute(makeAddIndicatorController(connection))
  )
  router.get(
    '/indicator',
    auth,
    adaptRoute(makeGetAllIndicatorsController(connection))
  )
  router.get(
    '/indicator/filter',
    auth,
    adaptRoute(makeGetIndicatorDataController(connection))
  )
}
