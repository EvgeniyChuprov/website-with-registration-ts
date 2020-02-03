import React from 'react';
import ReactDOM from 'react-dom';

import { AppPage } from 'core/App/index';

import { Firebase, FirebaseContext } from './services/Firebase';

ReactDOM.hydrate(
  <FirebaseContext.Provider value={new Firebase()}>
    <AppPage />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
