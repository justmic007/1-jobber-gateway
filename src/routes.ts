import { Application } from 'express';
import { healthroutes } from '@gateway/routes/health';
import { authroutes } from '@gateway/routes/auth';

const BASE_PATH = '/api/gateway/v1';

export const appRoutes = (app: Application) => {
  app.use('', healthroutes.routes());
  app.use(BASE_PATH, authroutes.routes());
};
