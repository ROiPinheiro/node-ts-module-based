import { HttpResponse } from '../protocols';

export const ok = <Body = any>(body: Body): HttpResponse => ({
  statusCode: 200,
  payload: {
    body,
  },
});
