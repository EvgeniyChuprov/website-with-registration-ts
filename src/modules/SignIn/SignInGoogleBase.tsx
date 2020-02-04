import React from 'react';

import * as ROUTES from '../../constants/routes';

interface IProps {
  firebase: {
    doSignInWithGoogle: () => Promise<firebase.auth.UserCredential>;
  },
  history: {
    push: (arg: string) => void
  },
}

interface IState {
  error: null;
}

class SignInGoogleBase extends React.Component<IProps> {
  public state: IState = {
    error: null,
  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Google</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { firebase, history } = this.props;
    firebase.doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: {},
          });
      })
      .then(() => {
        this.setState({ error: null });
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
}

export { SignInGoogleBase };
