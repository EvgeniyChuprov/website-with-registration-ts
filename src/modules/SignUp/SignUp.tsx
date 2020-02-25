import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { SignUpPage } from './view';

const SignUp: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.signUp.getElementKey()}
        path={routes.signUp.getRoutePath()}
        component={SignUpPage}
      />
    );
  },
};

export { SignUp };
