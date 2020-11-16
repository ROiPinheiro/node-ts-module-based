import { Controller, AddUser } from './protocols';
import { HttpResponse } from '../../../shared/protocols';
import { ok } from '../../../shared/utils/http';

export class AddUserController implements Controller {
  constructor(private readonly addUser: AddUser) {}

  async handle(): Promise<HttpResponse> {
    try {
      const user = await this.addUser.add({ name: 'jucas' });
      return ok(user);
    } catch (error) {
      return { payload: {}, statusCode: 500 };
    }
  }
}
