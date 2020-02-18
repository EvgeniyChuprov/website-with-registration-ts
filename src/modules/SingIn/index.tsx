import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { firebaseApp } from '../../firebase/firebase';
import { checkAuthorization } from '../../firebase/checkAuthorization';
import { changeAuthorized } from '../../reducers/Authorized/actions';
import * as ROUTES from '../../constants/routes';
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
        <h1>Старница входа</h1>

        {authorized && <p>Сменить аккаунт</p>}
        {!authorized && <p>Введите свой логин и пароль</p>}

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

          <button type="submit" className="sing-in__button">Войти</button>
          {error && <p>{error.message}</p>}
        </form>
        <div>
          <p>Забыли пароль?</p>
          <button type="button" className="sing-in__button" onClick={this.resetPassword}>
            Сброс пароля
          </button>
        </div>
      </div>
    );
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
