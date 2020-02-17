// import { createStore } from 'redux';

import { CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_NAME, CHANGE_PHOTO_URL } from './actions';

interface IinitialState {
  authorized: boolean;
  email: string,
  password: string,
  displayName: string|null,
  photoURL: string,
  emailVerified: string,
  phoneNumber: number | null,
  isAnonymous: boolean,
  changeEmail: string,
  changePassword: string,
  changeName: string|null,
  ChangePhotoURL: string,
}

const initialState: IinitialState = {
  authorized: false,
  email: '',
  password: '',
  displayName: null,
  photoURL: '',
  emailVerified: '',
  changeEmail: '',
  changePassword: '',
  changeName: null,
  ChangePhotoURL: '',
  phoneNumber: null,
  isAnonymous: false,
};

const changeDateReducer = (state = initialState, action: any) => {
  // console.log('action', action);
  // // const { changeEmail, changePassword } = action.payload;
  // console.log('change', changeEmail, changePassword);
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        changeEmail: action.payload.changeEmail,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        changePassword: action.payload.changePassword,
      };
    case CHANGE_NAME:
      return {
        ...state,
        changeName: action.payload.changeName,
      };
    case CHANGE_PHOTO_URL:
      return {
        ...state,
        changePhotoURL: action.payload.changePhotoURL,
      };
    default:
      return state;
  }
};

export { changeDateReducer };

// const store = createStore(rootReducer);

// export { store, changeAuthorized, changeSingOut };