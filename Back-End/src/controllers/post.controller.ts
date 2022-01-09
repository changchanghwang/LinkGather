import { Request, Response, NextFunction } from 'express';
import * as moment from 'moment';
import { getRepository } from 'typeorm';
import { Like } from '../entity/like.entity';
import { Post } from '../entity/post.entity';
import { crawling } from '../utils/crawling';

class postController {
  //게시글 작성
  public createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { url, title, desc }: postInput = req.body;
      const user = res.locals.user;
      let image = await crawling(url);
      if (!image) {
        image =
          'https://user-images.githubusercontent.com/86486778/148642786-552a0da0-06e2-4a19-bf5c-17a28e184ded.png';
      }
      const uploadTime = moment().format('YYYY-MM-DD');
      await getRepository(Post).save({
        url,
        title,
        desc,
        user,
        image,
        uploadTime,
      });
      res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  };

  //게시글 수정
  public editPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { url, title, desc } = req.body;
      const user = res.locals.user;
      const post = await Post.findByUserAndId(user, Number(id));
      if (post) {
        let image = await crawling(url);
        if (!image) {
          image =
            'https://user-images.githubusercontent.com/86486778/148642786-552a0da0-06e2-4a19-bf5c-17a28e184ded.png';
        }
        await Post.updateOne(url, title, desc, image, Number(id));
        return res.status(200).json({ success: true });
      }
      return res
        .status(400)
        .json({ success: false, msg: '작성자가 아닙니다.' });
    } catch (err) {
      next(err);
    }
  };

  //게시글 삭제
  public deletePost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const user = res.locals.user;
      const post = await Post.findByUserAndId(user, Number(id));
      if (post) {
        await Post.deleteOne(Number(id));
        return res.status(200).json({ success: true });
      }
      return res
        .status(400)
        .json({ success: false, msg: '작성자가 아닙니다.' });
    } catch (err) {
      next(err);
    }
  };

  //preview 이미지
  public previewImage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { url } = req.body;
      let image = await crawling(url);
      if (!image) {
        image =
          'https://user-images.githubusercontent.com/86486778/148642786-552a0da0-06e2-4a19-bf5c-17a28e184ded.png';
      }
      res.status(200).json({ image });
    } catch (err) {
      next(err);
    }
  };

  //좋아요
  public like = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = res.locals.user;
      const likeExist = await Like.findByUserAndId(user, Number(id));
      if (likeExist) {
        await Like.deleteOne(Number(id));
        res.status(200).json({ success: true, msg: '좋아요 취소' });
      } else {
        await getRepository(Like).save({ post: Number(id), user });
        res.status(200).json({ success: true, msg: '좋아요 성공' });
      }
    } catch (err) {
      next(err);
    }
  };
}

export default new postController();
