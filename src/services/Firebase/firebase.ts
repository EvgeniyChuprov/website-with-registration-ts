import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: 'AIzaSyCqqOOAES4Mq3-tya02MtNRljbx_K_nC2k',
  authDomain: 'testfromreg.firebaseapp.com',
  databaseURL: 'https://testfromreg.firebaseio.com',
  projectId: 'testfromreg',
  storageBucket: 'testfromreg.appspot.com',
  messagingSenderId: '573250671475',
  appId: '1:573250671475:web:f48e17e27b66cf33866b06',
  measurementId: 'G-TPTXHE7601',
};


class Firebase {
  auth: firebase.auth.Auth;
  db: firebase.database.Database;
  googleProvider: any;

  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string):
  Promise<firebase.auth.UserCredential> =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password: string):
  Promise<void> => this.auth.currentUser!.updatePassword(password);

  user = (uid: string) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next: (x: app.User | null) => void, fallback: () => void) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }
            // merge auth and db user
            authUser = {
              uid: authUser && authUser.uid,
              email: authUser && authUser.email,
              ...dbUser,
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });
}
export { Firebase };
