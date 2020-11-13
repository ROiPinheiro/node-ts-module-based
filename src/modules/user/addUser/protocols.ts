import { User } from '../../../shared/protocols';

export * from '../../../shared/protocols';

type AddUserParams = Omit<User, 'id'>;

export interface AddUser {
  add(user: AddUserParams): Promise<User>;
}
