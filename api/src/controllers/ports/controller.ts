export type HttpRequest<T = any> = {
  body: T
  file: {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    buffer: Buffer
    size: number
  }
}

export type HttpResponse = {
  status: number
  error?: string
  message?: string
  data?: any
}

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}

export function notFound(message: string) {
  return {
    status: 404,
    error: 'not found',
    message
  }
}

export function badRequest(message: string) {
  return {
    status: 400,
    error: 'bad request',
    message
  }
}

export function internalServerError(message: string): HttpResponse {
  return {
    status: 500,
    error: 'internal server error',
    message
  }
}

export function ok(data: any): HttpResponse {
  return {
    status: 200,
    data
  }
}

export function created(data?: any): HttpResponse {
  return {
    status: 201,
    data
  }
}
