import React from 'react';
import { Link } from 'react-router-dom';

import { SignOut } from '../../modules/SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { AuthUserContext } from '../../services/Session';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      (authUser ? (
        <NavigationAuth authUser= {authUser} />
      ) : (
        <NavigationNonAuth />
      ))}
  </AuthUserContext.Consumer>
);


const NavigationAuth = ({ authUser }: {authUser: any}) => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    <li>
      <SignOut />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export { Navigation };
