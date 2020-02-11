import { firebaseApp } from './firebase';
import * as ROUTES from '../constants/routes';

const checkAuthorization = (changeAuthorized: (x: {}) => {}) => {
  firebaseApp.auth().onAuthStateChanged((user: firebase.User | null) => {
    if (user) {
      changeAuthorized({
        email: user.email,
        authorized: true,
      });
    } else {
      changeAuthorized({
        email: '',
        authorized: false,
      });
    }
  });
};

const firebaseOut = (history: {
  push: (arg: string) => void
}) => {
  firebaseApp.auth().signOut();
  history.push(ROUTES.LANDING);
};

export { checkAuthorization, firebaseOut };
