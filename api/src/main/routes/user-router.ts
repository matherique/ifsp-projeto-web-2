import { Router } from 'express'
import { Connection } from 'typeorm'
import { adaptRoute } from '../adapter/express-router'
import makeDeleteUserController from '../factories/delete-user-controller'
import { makeGenerateUserReportController } from '../factories/generate-user-report-controller'
import makeGetAllUsersController from '../factories/get-all-users-controller'
import { makeGetUserInfoController } from '../factories/get-user-info-controller'
import makeGetUserReportDataController from '../factories/get-user-report-data-controller'
import { makeRegisterUserController } from '../factories/register-user-controller'
import { makeSignInController } from '../factories/sign-in-controller'
import { makeUpdateUserController } from '../factories/update-user-controller'
import authentication from '../middlewares/authentication'
import authorization from '../middlewares/authorization'

export default (router: Router, connection: Connection): void => {
  router.get(
    '/user/report',
    authentication,
    authorization,
    adaptRoute(makeGetUserReportDataController(connection))
  )
  router.get(
    '/user/report/print',
    authentication,
    authorization,
    adaptRoute(makeGenerateUserReportController(connection))
  )
  router.get(
    '/user',
    authentication,
    authorization,
    adaptRoute(makeGetAllUsersController(connection))
  )
  router.delete(
    '/user',
    authentication,
    authorization,
    adaptRoute(makeDeleteUserController(connection))
  )
  router.post('/user', adaptRoute(makeRegisterUserController(connection)))
  router.put(
    '/user/:id',
    authentication,
    adaptRoute(makeUpdateUserController(connection))
  )
  router.post('/user/login', adaptRoute(makeSignInController(connection)))
  router.get(
    '/user/:id',
    authentication,
    authorization,
    adaptRoute(makeGetUserInfoController(connection))
  )
}
