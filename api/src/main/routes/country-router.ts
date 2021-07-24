import { Router } from 'express'
import { Connection } from 'typeorm'
import { adaptRoute } from '../adapter/express-router'
import makeGetAllCountriesController from '../factories/get-all-countries-controller'

export default (router: Router, connection: Connection): void => {
  router.get('/country', adaptRoute(makeGetAllCountriesController(connection)))
}
