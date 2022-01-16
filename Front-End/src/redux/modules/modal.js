// bucket.js

// Actions
// const LOAD = 'my-app/widgets/LOAD';
const SIGNUP = 'modal/SIGNUP';
const LOGIN = 'modal/LOGIN';

const initialState = {
  signUpOpen: false,
  loginOpen: false,
};

// Action Creators
// export function loadWidgets() {
//   return { type: LOAD };
// }

export function signupModal(isOpen) {
  console.log('회원가입 모달 액션 생성');
  return { type: SIGNUP, isOpen };
}

export function loginModal(isOpen) {
  console.log('로그인 모달 액션 생성');
  return { type: LOGIN, isOpen };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // signup modal
    case 'modal/SIGNUP': {
      console.log('리듀서 동작. 회원가입 모달 조작');
      const signUpOpen = !action.isOpen;
      return { signUpOpen };
    }
    case 'modal/LOGIN': {
      console.log('리듀서 동작. 로그인 모달 조작');
      console.log('옾흔', action.isOpen);
      const loginOpen = !action.isOpne;
      console.log('로그인오픈', loginOpen);
      return { loginOpen };
    }
    default:
      return { signUpOpen: false, loginOpen: false };
  }
}
