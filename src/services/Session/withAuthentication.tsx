import React from 'react';

import { AuthUserContext } from './context';
import { withFirebase } from '../Firebase';

interface IState {
  authUser: {} | null ;
}

interface IProps {
  firebase: {
    auth: firebase.auth.Auth;
    user: (x: string) => firebase.database.Reference;
    onAuthUserListener(a: (a: {}) => void, b: () => void): void;
  },
}

const withAuthentication = (Component: any) => {
  class WithAuthentication extends React.Component<IProps> {
    listener: any;

    public state: IState = {
      authUser: JSON.parse(localStorage.getItem('authUser')),
    };

    componentDidMount() {
      const { firebase } = this.props;
      this.listener = firebase.onAuthUserListener(
        authUser => {
          localStorage.setItem('authUser', JSON.stringify(authUser));
          this.setState({ authUser });
        },
        () => {
          localStorage.removeItem('authUser');
          this.setState({ authUser: null });
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
