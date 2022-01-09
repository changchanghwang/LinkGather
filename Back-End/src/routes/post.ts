import { Router } from 'express';
import postController from '../controllers/post.controller';
import Routers from '../interfaces/router.interface';
import { auth } from '../middlewares/auth';

class postRouter implements Routers {
  public path = '/posts';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, auth, postController.createPost);
    this.router.patch(`${this.path}/:id`, auth, postController.editPost);
    this.router.delete(`${this.path}/:id`, auth, postController.deletePost);
    this.router.post(`${this.path}/:id/preview`, postController.previewImage);
    this.router.post(`${this.path}/like`, postController.like);
  }
}

export default postRouter;
