import { Request, Response } from 'express';

export interface Controller {
  handle: (req: Request, res: Response) => Promise<Response>;
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
