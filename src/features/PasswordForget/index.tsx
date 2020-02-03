import React from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../../services/Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForget = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);
const INITIAL_STATE = {
  email: '',
  error: null,
};

interface IState {
  email: string,
  error: {message: string} | null,
}

interface IProps {
  firebase: {
    doPasswordReset(arg: string): Promise<void>
  },
}

class PasswordForgetFormBase extends React.Component<IProps> {
  public state: IState = {
    email: '',
    error: null,
  };

  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };
}
const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForget, PasswordForgetForm, PasswordForgetLink };
