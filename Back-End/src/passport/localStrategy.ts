import * as passport from 'passport';
import { Strategy } from 'passport-local';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../entity/repository/user.repository';
import * as passportJWT from 'passport-jwt';
import { getCustomRepository } from 'typeorm';
const jwtStrategy = passportJWT.Strategy;

export const localSignIn = () => {
  //localStrategy
  passport.use(
    new Strategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        // session: true, // 세션에 저장 여부
        // passReqToCallback: false,
      },
      async (email, password, done) => {
        try {
          const userRepository = getCustomRepository(UserRepository);
          const exUser = await userRepository.findOneByEmail(email);
          const validatePw = await bcrypt.compare(password, exUser.password);
          if (exUser && validatePw) {
            done(null, exUser);
          } else {
            done(null, false, {
              message: '아이디 및 비밀번호가 일치하지 않습니다.',
            });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
  //jwt Strategy
  passport.use(
    new jwtStrategy(
      {
        jwtFromRequest: passportJWT.ExtractJwt.fromHeader('authorization'),
        secretOrKey: process.env.SECRET,
      },
      async (jwtPayload, done) => {
        try {
          const userRepository = getCustomRepository(UserRepository);
          const user = await userRepository.findOneById(jwtPayload.id);
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};
