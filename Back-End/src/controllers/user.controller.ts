import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/user.entity';
import { checkPw } from '../utils/pwCheck';
import * as bcrypt from 'bcrypt';
import 'dotenv/config';
const salt = Number(process.env.SALT);
import passport = require('passport');
import { generateToken } from '../utils/tokenGenerator';

class userController {
  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, name, password, passwordCheck }: signup = req.body;
      const exUser = User.findOneByEmail(email);
      if (exUser) {
        if (checkPw(password, passwordCheck)) {
          const hashedPw = bcrypt.hashSync(password, salt);
          await getRepository(User).save({
            email,
            name,
            password: hashedPw,
          });
          return res.status(200).json({ success: true });
        }
        return res
          .status(400)
          .json({ success: false, msg: '비밀번호를 확인해주세요' });
      }
      return res
        .status(400)
        .json({ success: false, msg: '아이디가 중복됩니다.' });
    } catch (err) {
      next(err);
    }
  };

  public signIn = async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', { session: false }, (err, user: User) => {
      if (err || !user) {
        return res.status(400).json({
          success: false,
          msg: '아이디 및 비밀번호가 일치하지 않습니다',
        });
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          next(err);
        }
        const token = generateToken(user.id);
        return res.status(200).json({ success: true, token });
      });
    })(req, res);
  };
}

export default new userController();
