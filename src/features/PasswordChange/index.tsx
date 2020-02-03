import React from 'react';

import { withFirebase } from '../../services/Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

interface IState {
  passwordOne: string,
  passwordTwo: string,
  error: {message: string} | null,
}

interface IProps {
  firebase: {
    doPasswordUpdate(arg: string): Promise<void>
  },
}

class PasswordChangeForm extends React.Component<IProps> {
  public state: IState = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }

  onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { passwordOne } = this.state;
    const { firebase } = this.props;
    firebase.doPasswordUpdate(passwordOne)
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

const PasswordChangeFormElement = withFirebase(PasswordChangeForm);

export { PasswordChangeFormElement };
