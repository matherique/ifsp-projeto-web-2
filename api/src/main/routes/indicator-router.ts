import { Router } from 'express'
import { Connection } from 'typeorm'
import { adaptRoute } from '../adapter/express-router'
import makeAddIndicatorController from '../factories/add-indicator-controller'
import handleUpload from '../middlewares/file-upload'

export default (router: Router, connection: Connection): void => {
  router.post(
    '/indicator',
    handleUpload,
    adaptRoute(makeAddIndicatorController(connection))
  )
}
