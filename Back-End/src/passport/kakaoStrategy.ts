import * as passport from 'passport';
import * as kakao from 'passport-kakao';
import 'dotenv/config';
const KakaoStrategy = kakao.Strategy;

passport.use(
  'kakao',
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
      callbackURL: '/auth/kakao/callback',
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);
