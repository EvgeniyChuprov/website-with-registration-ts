import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navigations } from '../../features/Navigations';
import { Landing } from '../../modules/Landing';
import { WrapperSignUp } from '../../modules/SignUp';
import { WrapperSingIn } from '../../modules/SingIn';
import { WrapperHome } from '../../modules/Home';
import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigations />
      <hr />
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route exact path={ROUTES.HOME} component={WrapperHome} />
      <Route exact path={ROUTES.SING_UP} component={WrapperSignUp} />
      <Route exact path={ROUTES.SING_IN} component={WrapperSingIn} />
    </div>
  </Router>
);

export { App };
