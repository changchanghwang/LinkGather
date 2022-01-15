// bucket.js

// Actions
// const LOAD = 'my-app/widgets/LOAD';
const SIGNUP = 'modal/SIGNUP';

const initialState = {
  isOpen: false,
};

// Action Creators
// export function loadWidgets() {
//   return { type: LOAD };
// }

export function signupModal(isOpen) {
  console.log('생성 액션 생성');
  return { type: SIGNUP, isOpen };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // signup modal
    case 'modal/SIGNUP': {
      console.log('리듀서 동작. 값변경');
      const isOpen = !action.isOpen;
      return { isOpen };
    }
    default:
      return { isOpen: state.isOpen };
  }
}
