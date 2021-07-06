import { Request, Response } from "express"
import { Controller } from "../../presentation/controllers/ports/controller"

export function adaptRoute(controller: Controller): (req: Request, res: Response) => Promise<Response> {
  return async (req: Request, res: Response) => {
    const httpRequest = {
      body: req.body || {}
    }
    const httpResponse = await controller.handle(httpRequest)
    
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return res.status(httpResponse.statusCode).json(httpResponse.data)
    }
    
    return res.status(httpResponse.statusCode).json({
      error: httpResponse.message
    })
  }
}