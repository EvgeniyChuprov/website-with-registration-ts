import React from 'react';

import { withFirebase } from '../../services/Firebase';

const SignOutButton = ({ firebase }: any) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

const SignOut = withFirebase(SignOutButton);

export { SignOut };
