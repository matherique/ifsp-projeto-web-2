import { Request, Response } from 'express'
import { Controller } from '../../controllers/ports/controller'

export function adaptRoute(
  controller: Controller
): (req: Request, res: Response) => Promise<Response> {
  return async (req: Request, res: Response) => {
    const httpRequest = {
      body: {
        ...req.body,
        ...req.params,
        ...req.query
      }
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
