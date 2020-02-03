import React from 'react';
import { withRouter } from 'react-router-dom';

import { AuthUserContext } from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

interface IProps {
  firebase: {
    auth: firebase.auth.Auth;
  },
  history: {
    push: (arg: string) => void
  },
}

const withAuthorization = (condition: ((x: {}|null) => boolean)) => (Component: any) => {
  class WithAuthorization extends React.Component<IProps> {
    listener: any;


    componentDidMount() {
      const { firebase, history } = this.props;
      this.listener = firebase.auth.onAuthStateChanged(
        authUser => {
          if (!condition(authUser)) {
            history.push(ROUTES.SIGN_IN);
          }
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          { authUser => (condition(authUser) ? <Component {...this.props} /> : null) }
        </AuthUserContext.Consumer>
      );
    }
  }
  return withRouter(withFirebase(WithAuthorization));
};

export { withAuthorization };
