import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { SignUpPage, SignInPage } from './view/components';

const Registration: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.registration.getElementKey()}
        path={routes.registration.getRoutePath()}
      >
        <Switch>
          <Route
            key={routes.registration.registrationSignUp.getElementKey()}
            path={routes.registration.registrationSignUp.getRoutePath()}
            component={SignUpPage}
          />
          <Route
            key={routes.registration.registrationSignIn.getElementKey()}
            path={routes.registration.registrationSignIn.getRoutePath()}
            component={SignInPage}
          />
        </Switch>
      </Route>
    );
  },
};

export { Registration };
