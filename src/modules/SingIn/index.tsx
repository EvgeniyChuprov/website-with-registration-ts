import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { firebaseApp, googleProvider } from '../../firebase/firebase';
import { checkAuthorization } from '../../firebase/checkAuthorization';
import { changeAuthorized } from '../../reducers/Authorized/actions';
import * as ROUTES from '../../constants/routes';
import { Button } from '../../features/Button';
import './style.scss';

interface IState {
  email: string,
  password: string,
  error: { message: string } | null,
}

interface IProps {
  authorized: boolean,
  photoURL: string,
  email: string,
  history: {
    push: (arg: string) => void
  }
  changeAuthorized: (x: {}) => {},
}

class SingIn extends React.Component<IProps> {
  public state: IState = {
    email: '',
    password: '',
    error: null,
  };

  componentDidMount() {
    const { changeAuthorized } = this.props;
    checkAuthorization(changeAuthorized);
  }

  componentDidUpdate() {
    const { changeAuthorized } = this.props;
    checkAuthorization(changeAuthorized);
  }

  render() {
    const { authorized } = this.props;
    const { error } = this.state;
    return (
      <div className="sing-in">
        <h1 className="sing-in__header">Страница входа</h1>

        {authorized && <p className="sing-in__text">Сменить аккаунт</p>}
        {!authorized && <p className="sing-in__text">Введите свой логин и пароль</p>}
        <div className="sign-in__wrapper">
          <form onSubmit={this.onSubmit}>
            <input
              className="sing-in__form-input"
              onChange={this.onChange}
              type="email"
              name="email"
              placeholder="ваш email"
            />
            <input
              className="sing-in__form-input"
              onChange={this.onChange}
              type="password"
              name="password"
              placeholder="ваш пароль"
            />
            <Button
              name="Войти"
            />
            {error && <p className="sing-in__text">{error.message}</p>}
          </form>
        </div>
        <div>
          <h2>Вход через соцсети</h2>
          <Button
            name="googl"
            method={this.onGoogle}
          />
        </div>
        <div>
          <p className="sing-in__text">Забыли пароль?</p>
          <Button
            name="Сброс пароля"
            method={this.resetPassword}
          />
        </div>
      </div>
    );
  }

  onGoogle = () => {
    firebaseApp.auth().signInWithPopup(googleProvider)
    console.log(firebaseApp)
  }

  resetPassword = () => {
    const { history } = this.props;
    history.push(ROUTES.RESET);
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { history } = this.props;
    const { password, email } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.HOME);
        this.setState({ error: '' });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };
}

const putStateToProps = (state: any) => {
  const { email, authorized, error, password, photoURL } = state.root;
  return {
    email,
    authorized,
    error,
    password,
    photoURL,
  };
};

const putActionsToProps = (dispatch: any) => ({
  changeAuthorized: bindActionCreators(changeAuthorized, dispatch),
});

const WrapperSingIn = connect(putStateToProps, putActionsToProps)(SingIn);

export { WrapperSingIn };
