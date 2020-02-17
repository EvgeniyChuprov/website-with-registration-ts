export const AUTHORIZIRED = 'AUTHORIZIRED';
export const SIGNOUT = 'SIGNOUT';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PHOTO_URL = 'CHANGE_PHOTO_URL';
export const CHANGE_NAME = 'CHANGE_NAME';

export const setAuthorizired = (auth: boolean) => (
  {
    type: AUTHORIZIRED,
    payload: {
      authorizired: auth,
    },
  }
);

export const setChangeEmail = (changeEmail: string) => (
  {
    type: CHANGE_EMAIL,
    payload: {
      changeEmail,
    },
  }
);

export const setChangePassword = (changePassword: string) => (
  {
    type: CHANGE_PASSWORD,
    payload: {
      changePassword,
    },
  }
);

export const setChangeName = (changeName: string|null) => (
  {
    type: CHANGE_NAME,
    payload: {
      changeName,
    },
  }
);

export const setChangePhotoURL = (changePhotoURL: string) => (
  {
    type: CHANGE_PHOTO_URL,
    payload: {
      changePhotoURL,
    },
  }
);
