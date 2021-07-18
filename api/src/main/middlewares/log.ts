import { NextFunction, Request, Response } from 'express'

export default async function log(
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  console.log(
    `${Date.toString()}- ${request.method} ${request.url} ${JSON.stringify(
      request.headers
    )} `
  )

  next()
}
