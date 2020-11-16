import { Request, Response } from 'express';
import { Controller, HttpRequest } from '../protocols';

export const makeHttpRequest = (req: Request): HttpRequest => ({
  body: req.body,
  params: req.params,
  headers: req.headers,
});

export const adaptRoute = (controller: Controller) => async (req: Request, res: Response) => {
  const httpRequest = makeHttpRequest(req);
  const httpResponse = await controller.handle(httpRequest);
  return res.status(httpResponse.statusCode).json(httpResponse.payload);
};
