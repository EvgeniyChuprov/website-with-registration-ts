import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { WrapperNavigations } from '../../features/Navigations';
import { Landing } from '../../modules/Landing';
import { WrapperSignUp } from '../../modules/SignUp';
import { WrapperSingIn } from '../../modules/SingIn';
import { WrapperHome } from '../../modules/Home';
import { ResetPassword } from '../../modules/ResetPassword';
import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <WrapperNavigations />
      <hr />
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route exact path={ROUTES.HOME} component={WrapperHome} />
      <Route exact path={ROUTES.SING_UP} component={WrapperSignUp} />
      <Route exact path={ROUTES.SING_IN} component={WrapperSingIn} />
      <Route exact path={ROUTES.RESET} component={ResetPassword} />
    </div>
  </Router>
);

export { App };
