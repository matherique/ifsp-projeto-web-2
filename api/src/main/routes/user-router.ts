import { Router } from 'express'
import { Connection } from 'typeorm'
import { adaptRoute } from '../adapter/express-router'
import makeDeleteUserController from '../factories/delete-user-controller'
import makeGetAllUsersController from '../factories/get-all-users-controller'
import { makeGetUserInfoController } from '../factories/get-user-info-controller'
import { makeRegisterUserController } from '../factories/register-user-controller'
import { makeSignInController } from '../factories/sign-in-controller'
import { makeUpdateUserController } from '../factories/update-user-controller'

export default (router: Router, connection: Connection): void => {
  router.get('/user', adaptRoute(makeGetAllUsersController(connection)))
  router.delete('/user', adaptRoute(makeDeleteUserController(connection)))
  router.post('/user', adaptRoute(makeRegisterUserController(connection)))
  router.put('/user/:id', adaptRoute(makeUpdateUserController(connection)))
  router.post('/user/login', adaptRoute(makeSignInController(connection)))
  router.get('/user/:id', adaptRoute(makeGetUserInfoController(connection)))
}
