export interface HttpRequest<Body = any, Params = any, Headers = any> {
  body: Body;
  params: Params;
  headers: Headers;
}

export interface HttpResponse<Body = any> {
  payload: Body;
  statusCode: number;
}

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>;
}

export interface Project {
  name: string;
  initialDate: Date;
}

export interface User {
  id: string;
  name: string;
  project?: Project;
}
