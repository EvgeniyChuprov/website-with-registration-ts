import { createStore } from 'redux';

const AUTHORIZIRED = 'AUTHORIZIRED';
const SIGNOUT = 'SIGNOUT';

interface IinitialState {
  authorized: boolean;
  email: string,
  password: string,
}

const initialState: IinitialState = {
  authorized: false,
  email: '',
  password: '',
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
  switch (action.type) {
    case AUTHORIZIRED:
      return {
        ...state,
        authorized: action.payload.authorized,
        email: action.payload.email,
        password: action.payload.password,
      };
    case SIGNOUT:
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export { store, changeAuthorized, changeSingOut };
