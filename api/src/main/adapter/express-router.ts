import { Request, Response } from 'express'
import { Controller } from '../../controllers/ports/controller'
import { RequestWithUser } from '../middlewares/auth'

export function adaptRoute(
  controller: Controller
): (req: Request, res: Response) => Promise<Response> {
  return async (req: RequestWithUser, res: Response) => {
    const httpRequest = {
      body: {
        ...req.body,
        ...req.params,
        ...req.query
      },
      file: req.file,
      user: req.user
    }

    const httpResponse = await controller.handle(httpRequest)

    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
      return res.status(httpResponse.status).json(httpResponse.data)
    }

    return res.status(httpResponse.status).json({
      error: httpResponse.error,
      message: httpResponse.message
    })
  }
}
