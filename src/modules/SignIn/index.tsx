import React from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../../features/PasswordForget';
import { withFirebase } from '../../services/Firebase';
import * as ROUTES from '../../constants/routes';


interface IState {
  email: string,
  password: string,
  error: { message: () => void } | null,
}

interface IProps {
  firebase: any,
  history: {
    push: (arg: string) => void
  },
}

const SignIn = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends React.Component<IProps> {
  public state: IState = {
    email: '',
    password: '',
    error: null,
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { email, password } = this.state;
    const { firebase, history } = this.props;
    firebase.doSignInWithEmailAndPassword(email, password).then(() => {
      this.setState({ ...INITIAL_STATE });
      history.push(ROUTES.HOME);
    })
      .catch((error: any) => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export { SignIn, SignInForm };
