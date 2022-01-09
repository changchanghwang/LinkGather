import { NextFunction, Router, Request, Response } from 'express';
import Routers from '../interfaces/router.interface';
import userController from '../controllers/user.controller';

class userRouter implements Routers {
  public path = '/users';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/signup`, userController.signUp);
    this.router.post(`${this.path}/signin`, userController.signIn);
  }
}

export default userRouter;
