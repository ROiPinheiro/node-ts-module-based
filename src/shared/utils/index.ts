import { Request, Response } from 'express';
import { Controller } from '../protocols';

export const adaptRoute = (controller: Controller) => async (
  req: Request,
  res: Response,
) => controller.handle(req, res);
