import { Router } from 'express';
import { makeAddUserController } from './modules/user/addUser';
import { adaptRoute } from './shared/utils';

const routes = Router();

routes.get('/', adaptRoute(makeAddUserController()));

export { routes };
