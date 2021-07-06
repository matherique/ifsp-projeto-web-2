import { Router } from 'express';
import { adaptRoute } from '../adapter/express-router';
import { makeRegisterUserController } from '../factories/register-user-controller';

export default (router: Router): void => {
  router.post('/register-user', adaptRoute(makeRegisterUserController())) 
}