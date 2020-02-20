import React from 'react';
import { connect } from 'react-redux';

import { firebaseApp } from '../../firebase/firebase';
import * as ROUTES from '../../constants/routes';
import { Button } from '../../features/Button';
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
  userName: string,
  error: { message: string } | null,
}

class SingUp extends React.Component<IProps> {
  public state: IState = {
    email: '',
    password: '',
    userName: '',
    error: null,
  };

  render() {
    const { error } = this.state;
    const { authorized, email } = this.props;
    return (
      <div className="sign-up">
        <h1 className="sign-up__header">Регистрация</h1>
        {authorized
          && (
            <div>
              <p className="sing-up__text">Вы уже зарегестрированы.</p>
              <p className="sing-up__text">
                Ваш логин:
                {email}
              </p>
              <Button
                name="Сменить пользователя"
                method={this.firebaseOut}
              />
            </div>
          )}
        {!authorized
          && (
            <div className="sign-up__form-wrapper">
              <p className="sign-up__text">Заполните форму регистрации</p>
              <form onSubmit={this.handleSignUp}>
                <input
                  className="sign-up__form-input"
                  onChange={this.onChange}
                  type="userName"
                  name="userName"
                  placeholder="Ваше имя"
                />
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
                <Button
                  name="Зарегистрироваться"
                />
                {error && <p className="sign-up__text">{error.message}</p>}
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
    const { email, password, userName } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(authUser => {
      firebaseApp.database().ref(`users/${authUser.user && authUser.user.uid}`).set({
        email,
        data: {
          userName,
          password,
        },
      });
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
