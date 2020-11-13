import { AddUser, User } from './protocols';

export class DbAddUser implements AddUser {
  async add(user: Pick<User, 'name' | 'project'>) {
    return { id: 'any', ...user };
  }
}
