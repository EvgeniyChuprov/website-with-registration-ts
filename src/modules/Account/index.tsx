import React from 'react';

import { PasswordForgetForm } from '../../features/PasswordForget';
import { PasswordChangeFormElement } from '../../features/PasswordChange';
import { AuthUserContext, withAuthorization } from '../../services/Session';


const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser: {email: string} | null) => (
      <div>
        <h1>
          Account:
          {authUser && authUser.email}
        </h1>
        <PasswordForgetForm />
        <PasswordChangeFormElement />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser: {} | null) => !!authUser;

const Account = withAuthorization(condition)(AccountPage);

export { Account };
