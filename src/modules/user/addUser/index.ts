import { AddUserController } from './AddUserController';
import { DbAddUser } from './AddUserRepository';

export const makeAddUserController = () => {
  const addUser = new DbAddUser();
  return new AddUserController(addUser);
};
