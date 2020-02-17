import React from 'react';
import { connect } from 'react-redux';

import { firebaseApp } from '../../firebase/firebase';
import * as ROUTES from '../../constants/routes';
import './style.scss';

interface IProps {
  authorized: boolean,
  email: '',
  history: {
    push: (arg: string) => void
  }
}

interface IState {
  email: string,
  password: string,
  error: { message: string } | null,
}

class SingUp extends React.Component<IProps> {
  public state: IState = {
    email: '',
    password: '',
    error: null,
  };

  render() {
    const { error } = this.state;
    const { authorized, email } = this.props;
    return (
      <div className="sign-up">
        <h1>Регистрация</h1>
        {authorized
          && (
            <div>
              <p>Вы уже зарегестрированы.</p>
              <p>
                Ваш логин:
                {email}
              </p>
              <button type="button" onClick={this.firebaseOut}>
                Сменить пользователя
              </button>
            </div>
          )}
        {!authorized
          && (
            <div>
              <p>Заполните форму регистрации</p>
              <form onSubmit={this.handleSignUp}>
                <input
                  className="sign-up__form-input"
                  onChange={this.onChange}
                  type="email"
                  name="email"
                  placeholder="Ваш email"
                />
                <input
                  className="sign-up__form-input"
                  onChange={this.onChange}
                  type="password"
                  name="password"
                  placeholder="Ваш пароль"
                />
                <button type="submit" className="sign-up__button">Зарегистрироваться</button>
                {error && <p>{error.message}</p>}
              </form>
            </div>
          )}
      </div>
    );
  }

  firebaseOut = () => {
    firebaseApp.auth().signOut();
  };

  handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    const { history } = this.props;
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(() => {
      history.push(ROUTES.HOME);
    }).catch(error => {
      this.setState({ error });
    });
    event.preventDefault();
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

const putStateToProps = (state: any) => {
  const { email, authorized, error, password } = state.root;
  return {
    email,
    authorized,
    error,
    password,
  };
};

const WrapperSignUp = connect(putStateToProps)(SingUp);

export { WrapperSignUp };
