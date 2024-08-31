import { Application } from 'express';

import { healthroutes } from '@gateway/routes/health';

export const appRoutes = (app: Application) => {
  app.use('', healthroutes.routes())
}
