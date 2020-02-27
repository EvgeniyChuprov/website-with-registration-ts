import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { RegistrationLayout, RegistrationSignIn, RegistrationSignUp } from './view/components';

const Registration: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.search.getElementKey()}
        path={routes.search.getRoutePath()}
      >
        <Switch>
          <Route
            key={routes.search.users.getElementKey()}
            path={routes.search.users.getRoutePath()}
            component={RegistrationSignIn}
          />
          <Route
            key={routes.search.repositories.getElementKey()}
            path={routes.search.repositories.getRoutePath()}
            component={RegistrationSignUp}
          />
        </Switch>
      </Route>
      // <Route
      //   key={routes.registration.getElementKey()}
      //   path={routes.registration.getRoutePath()}
      //   component={RegistrationLayout}
      // />
    );
  },
};

export { Registration };
