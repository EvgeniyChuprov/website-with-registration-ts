import React from 'react';

import { AuthUserContext } from './context';
import { withFirebase } from '../Firebase';

interface IState {
  authUser: null;
}

interface IProps {
  firebase: {
    auth: firebase.auth.Auth;
  }
}

const withAuthentication = (Component: any) => {
  class WithAuthentication extends React.Component<IProps> {
    listener: any;

    public state: IState = {
      authUser: null,
    };

    componentDidMount() {
      const { firebase } = this.props;
      this.listener = firebase.auth.onAuthStateChanged(
        authUser => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      const { authUser } = this.state;
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export { withAuthentication };
