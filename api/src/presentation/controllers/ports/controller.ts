export type HttpRequest<T = any> = {
  body: T;
};

export class HttpResponse {
  public statusCode: number;
  public message: string;
  public data: any;

  constructor(statusCode: number, message?: string, data?: any) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  static internalServerError(message: string) {
    return new HttpResponse(500, message);
  }

  static badRequest(message: string) {
    return new HttpResponse(400, message);
  }

  static ok(data: any) {
    return new HttpResponse(200, null, data);
  }

  static created() {
    return new HttpResponse(201, null, null);
  }
}

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
