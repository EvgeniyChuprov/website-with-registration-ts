import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { SignInPage } from './view';

const SignIn: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.signIn.getElementKey()}
        path={routes.signIn.getRoutePath()}
        component={SignInPage}
      />
    );
  },
};

export { SignIn };
