import { createStore } from 'redux';

const AUTHORIZIRED = 'AUTHORIZIRED';
const SIGNOUT = 'SIGNOUT';

interface IinitialState {
  authorized: boolean;
  email: string,
  password: string,
  displayName: string,
  photoURL: string,
  emailVerified: string,
  phoneNumber: number | null,
  isAnonymous: boolean,
}

const initialState: IinitialState = {
  authorized: false,
  email: '',
  password: '',
  displayName: '',
  photoURL: '',
  emailVerified: '',
  phoneNumber: null,
  isAnonymous: false,
};

const changeAuthorized = (newStatusAuthorized: {}) => (
  {
    type: AUTHORIZIRED,
    payload: newStatusAuthorized,
  }
);

const changeSingOut = () => (
  {
    type: SIGNOUT,
    payload: initialState,
  }
);

const rootReducer = (state = initialState, action: any) => {
  const { payload } = action;
  switch (action.type) {
    case AUTHORIZIRED:
      return {
        ...state, ...payload,
      };
    case SIGNOUT:
      return {
        ...state, ...payload,
      };
    default:
      return state;
  }
};

export { rootReducer };

const store = createStore(rootReducer);

export { store, changeAuthorized, changeSingOut };
