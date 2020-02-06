import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navigations } from '../../features/Navigations';
import { Landing } from '../../modules/Landing';
import { SingUp } from '../../modules/SignUp';
import { SingIn } from '../../modules/SingIn';
import { Home } from '../../modules/Home';
import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigations />
      <hr />
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.SING_UP} component={SingUp} />
      <Route exact path={ROUTES.SING_IN} component={SingIn} />
    </div>
  </Router>
);

export { App };
