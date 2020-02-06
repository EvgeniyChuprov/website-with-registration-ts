import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './core/App/index';
import { firebaseApp } from './firebase/firebase';

const FirebaseContext = React.createContext({});

ReactDOM.render(
  <FirebaseContext.Provider value={firebaseApp}>
    <App />
  </FirebaseContext.Provider>, document.getElementById('root'),
);
