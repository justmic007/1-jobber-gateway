import { Signup } from '@gateway/controllers/auth/signup';
import express, { Router } from 'express';

class AuthRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/auth/signup', Signup.prototype.create);
    return this.router;
  }
}

export const authroutes: AuthRoutes = new AuthRoutes();
