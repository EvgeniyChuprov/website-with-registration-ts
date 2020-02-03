import React from 'react';

const FirebaseContext = React.createContext({});

export const withFirebase = (Component: any) => (props: {}) => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export { FirebaseContext };
