import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navigation } from 'features/Navigation';

import { Landing } from '../../modules/Landing';
import { SignUp } from '../../modules/SignUp';
import { SignIn } from '../../modules/SignIn';
import { PasswordForget } from '../../features/PasswordForget';
import { Home } from '../../modules/Home';
import { Account } from '../../modules/Account';
import { Admin } from '../../modules/Admin';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../../services/Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForget}
      />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.ACCOUNT} component={Account} />
      <Route exact path={ROUTES.ADMIN} component={Admin} />
    </div>
  </Router>
);

const AppPage = withAuthentication(App);

export { AppPage };
