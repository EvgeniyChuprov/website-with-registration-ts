import app from 'firebase/app';

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

const firebaseApp = app.initializeApp(config);

export { firebaseApp };
