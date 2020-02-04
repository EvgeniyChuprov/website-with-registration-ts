import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../../services/Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';


const SignUp = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};

interface IState {
  username: string,
  email: string,
  passwordOne: string,
  passwordTwo: string,
  isAdmin: boolean,
  error: { message: () => void } | null,
}

interface IProps {
  firebase: {
    doCreateUserWithEmailAndPassword: (email: string, password: string)
    => Promise<firebase.auth.UserCredential>,
    user: (uid: string | null) => any;
  },
  history: {
    push: (arg: string) => void
  },
}

interface IRoles {
  [ROLES.ADMIN]: string | null;
}

class SignUpFormBase extends React.Component<IProps> {
  public state: IState = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false,
    error: null,
  };

  render() {
    const { username, email, passwordOne,
      passwordTwo, error, isAdmin } = this.state;

    const isInvalid = passwordOne
      !== passwordTwo
      || passwordOne === ''
      || email === ''
      || username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <label htmlFor="admin">
          Admin:
          <input
            id="admin"
            name="isAdmin"
            type="checkbox"
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
          />
        </label>
        <button disabled={isInvalid} type="submit">Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }

  onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { firebase } = this.props;
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles: IRoles = {
      [ROLES.ADMIN]: null,
    };

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => (
        // Create a user in your Firebase realtime database
        firebase.user(authUser.user && authUser.user.uid)
          .set({
            username,
            email,
            roles,
          })
      )).then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      }).catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

const SignUpLink = () => (
  <p>
    Don&apos;t have an account?
    <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export { SignUp, SignUpForm, SignUpLink };
