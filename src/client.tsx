import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './core/App/index';
import { firebaseApp } from './firebase/firebase';
import { createStore } from 'redux';
//import { store } from './reducers/store';
import { combReducer } from './reducers/reducers';

const store = createStore(combReducer);

const FirebaseContext = React.createContext({});


ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={firebaseApp}>
      <App />
    </FirebaseContext.Provider>
  </Provider>, document.getElementById('root'),
);
