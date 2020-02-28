import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { SignUpPage, RegistrationLayoutSignIn } from './view/components';

const Registration: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.registration.getElementKey()}
        path={routes.registration.getRoutePath()}
      >
        <Switch>
          <Route
            key={routes.registration.registrationLayoutSignUp.getElementKey()}
            path={routes.registration.registrationLayoutSignUp.getRoutePath()}
            component={SignUpPage}
          />
          <Route
            key={routes.registration.registrationLayoutSignUp.getElementKey()}
            path={routes.registration.registrationLayoutSignUp.getRoutePath()}
            component={RegistrationLayoutSignIn}
          />
        </Switch>
      </Route>
    );
  },
};

export { Registration };
