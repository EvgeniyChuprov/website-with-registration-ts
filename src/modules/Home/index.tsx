/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSingOut, changeAuthorized } from '../../reducers/Authorized/actions';
import { firebaseOut, checkAuthorization } from '../../firebase/checkAuthorization';
import { firebaseApp } from '../../firebase/firebase';
import { setChangePassword, setChangeEmail, setChangeName, setChangePhotoURL } from '../../reducers/ChangeData/actions';
import './style.scss';

interface IProps {
  email: string,
  photoURL: string,
  displayName: string | null,
  changePassword: string,
  changeEmail: string,
  changeName: string | null,
  changePhotoURL: string,
  history: {
    push: (arg: string) => void
  },
  // dispatch: any,
  changeAuthorized: (x: {}) => {},
  setChangePhotoURL: (x: {}) => {},
  setChangeName: (x: {}) => {},
  setChangeEmail: (x: {}) => {},
  setChangePassword: (x: {}) => {},
  changeSingOut: () => {}
}

interface IState {
  password: string | null,
  emailError: string | null,
  passwordError: string | null,
}

class Home extends React.Component<IProps> {
  public state: IState = {
    password: null,
    emailError: null,
    passwordError: null,
  }

  componentDidMount() {
    const { changeAuthorized } = this.props;
    checkAuthorization(changeAuthorized);
  }

  render() {
    const { email, displayName, photoURL } = this.props;
    const { emailError, passwordError, password } = this.state;
    return (
      <div className="home">
        <h1>Домашнаяя страница</h1>
        <div className="home__info">
          <p>
            Ваш логин:&nbsp;
            {email}
          </p>
          <p>
            Ваше имя:&nbsp;
            {displayName}
          </p>
          <p>
            Ваш аватар&nbsp;
            <img src={photoURL} className="home__img" alt="аватар" />
          </p>
          {password && <p>
            Ваш новый пароль:&nbsp;
            {password}
          </p>}
        </div>
        <hr />
        <form onSubmit={this.onSubmit} className="home__form">
          <h3>Изменить данные пользователя</h3>
          <input
            className="home__form-input"
            onChange={this.onChange}
            type="text"
            name="name"
            placeholder="Введите ваше имя"
          />
          <input
            className="home__form-input"
            onChange={this.onChange}
            type="text"
            name="photoURL"
            placeholder="Ссылка на ваше фото"
          />
          <input
            className="home__form-input"
            onChange={this.onChange}
            type="email"
            name="email"
            placeholder="Ваш новый email"
          />
          {emailError && <p>{emailError}</p>}
          <input
            className="home__form-input"
            onChange={this.onChange}
            type="password"
            name="password"
            placeholder="Введите новый пароль"
          />

          {passwordError && <p>{passwordError}</p>}
          <button type="submit" className="home__button">Применить изменения</button>
        </form>
        <div className="home__wrapper-button">
          <button type="button" onClick={this.firebaseOut} className="home__button">
            Выйти
          </button>
        </div>
      </div>
    );
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const { setChangePassword, setChangeEmail, setChangeName, setChangePhotoURL } = this.props;

    switch (name) {
      case 'password':
        setChangePassword(value);
        break;
      case 'email':
        setChangeEmail(value);
        break;
      case 'name':
        setChangeName(value);
        break;
      case 'photoURL':
        setChangePhotoURL(value);
        break;
      default:
        break;
    }
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { changeAuthorized, changeEmail, changeName, photoURL,
      displayName, changePhotoURL, changePassword } = this.props;

    const user = firebaseApp.auth().currentUser;

    if (user) {
      changeEmail && user.updateEmail(changeEmail).then(() => {

        checkAuthorization(changeAuthorized);
        this.setState({ emailError: '' });
      })
        .catch((error: { message: string }) => {
          // An error happened.
          this.setState({ emailError: error.message });
        });

      user.updateProfile({
        displayName: changeName ? changeName : displayName,
        photoURL: changePhotoURL ? changePhotoURL : photoURL,
      }).then(() => { checkAuthorization(changeAuthorized); })
        .catch((error: { message: string }) => {
          this.setState({ passwordError: error.message });
        });

      changePassword && user.updatePassword(changePassword).then(() => {
        checkAuthorization(changeAuthorized);
        this.setState({ passwordError: '', password: changePassword });
      }).catch((error: { message: string }) => {
        this.setState({ passwordError: error.message });
      });
    }

    checkAuthorization(changeAuthorized);
    event.preventDefault();
  };

  firebaseOut = () => {
    const { history, changeSingOut } = this.props;
    firebaseOut(history);
    changeSingOut();
  };
}

const putStateToProps = (state: any) => {
  const { email, authorized, error, password, displayName, photoURL } = state.root;
  const { changePassword, changeEmail, changeName, changePhotoURL } = state.change;
  return {
    photoURL,
    email,
    authorized,
    error,
    password,
    displayName,
    changePassword,
    changeEmail,
    changeName,
    changePhotoURL,
  };
};

const putActionsToProps = (dispatch: any) => ({
  changeSingOut: bindActionCreators(changeSingOut, dispatch),
  changeAuthorized: bindActionCreators(changeAuthorized, dispatch),
  setChangePassword: bindActionCreators(setChangePassword, dispatch),
  setChangeEmail: bindActionCreators(setChangeEmail, dispatch),
  setChangePhotoURL: bindActionCreators(setChangePhotoURL, dispatch),
  setChangeName: bindActionCreators(setChangeName, dispatch),
});

const WrapperHome = connect(putStateToProps, putActionsToProps)(Home);

export { WrapperHome };
