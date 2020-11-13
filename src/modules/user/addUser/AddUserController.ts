import { Request, Response } from 'express';
import { Controller, AddUser } from './protocols';

export class AddUserController implements Controller {
  constructor(private readonly addUser: AddUser) {}

  async handle(_: Request, res: Response) {
    const user = await this.addUser.add({
      name: 'jucas',
    });

    return res.json(user);
  }
}
