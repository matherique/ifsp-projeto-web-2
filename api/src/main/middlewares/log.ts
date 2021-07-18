import { NextFunction, Request, Response } from 'express'

export default async function log(
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  console.log(
    `${Date.now()} - ${request.method} ${request.url} ${JSON.stringify(
      request.body
    )} `
  )

  next()
}
