import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSingOut, changeAuthorized } from '../../reducers/store';
import { firebaseOut, checkAuthorization } from '../../firebase/checkAuthorization';
import { firebaseApp } from '../../firebase/firebase';

interface IProps {
  email: string,
  photoURL: string,
  displayName: string,
  history: {
    push: (arg: string) => void
  },
  dispatch: any,
  changeAuthorized: (x: {}) => {},
}

interface IState {
  displayName: string,
  email: string,
  password: string,
  emailError: string | null,
  passwordError: string | null,
}

class Home extends React.Component<IProps> {
  public state: IState = {
    displayName: '',
    email: this.props.email,
    password: '',
    emailError: null,
    passwordError: null,
  }

  componentDidMount() {
    const { changeAuthorized } = this.props;
    checkAuthorization(changeAuthorized);
  }

  render() {
    const { email, displayName, photoURL } = this.props;
    const { emailError, passwordError } = this.state;
    return (
      <div>
        <h1>Домашнаяя страница</h1>
        <p>Это ваша домашнаяя страница</p>
        <p>
          Ваш логин:
          {email}
        </p>
        <p>
          Ваше имя:
          {displayName}
        </p>
        <p>
          Ваш аватар
          <img src={photoURL} alt="аватар" />
        </p>


        <form onSubmit={this.onSubmit}>
          <div>
            <label>
              Ваше имя
              <input
                onChange={this.onChange}
                type="text"
                name="name"
                placeholder="Введите ваше имя"
              />
            </label>
          </div>
          <div>
            <label>
              Ссылка на ваше фото
              <input
                onChange={this.onChange}
                type="text"
                name="photoURL"
                placeholder="Ссылка на ваше фото"
              />
            </label>
          </div>
          <div>
            <label>
              Сменить email
              <input
                onChange={this.onChange}
                type="email"
                name="email"
                placeholder="Ваш новый email"
              />
            </label>
            {emailError && <p>{emailError}</p>}
          </div>
          <div>
            <label>
              Сменить пароль
              <input
                onChange={this.onChange}
                type="password"
                name="password"
                placeholder="Введите новый пароль"
              />
            </label>
            {passwordError && <p>{passwordError}</p>}
          </div>
          <button type="submit">Применить изменения</button>
        </form>
        <button type="button" onClick={this.firebaseOut}>
          Выйти
        </button>
      </div>
    );
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const user = firebaseApp.auth().currentUser;
    switch (name) {
      case 'name':
        user && user.updateProfile({
          displayName: value,
        });
        break;
      case 'photoURL':
        user && user.updateProfile({
          photoURL: value,
        });
        break;
      case 'email':
        user && user.updateEmail(value).then(() => {
          // Email sent.
          this.setState({ emailError: '' });
        })
          .catch((error: {message: string}) => {
            // An error happened.
            this.setState({ emailError: error.message });
          });
        break;
      case 'password':
        user && user.updatePassword(value).then(() => {
          // Email sent.
          this.setState({ passwordError: '' });
        })
          .catch((error: {message: string}) => {
            // An error happened.
            this.setState({ passwordError: error.message });
          });
        break;
      default:
        break;
    }
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { changeAuthorized } = this.props;
    checkAuthorization(changeAuthorized);
    event.preventDefault();
  };

  firebaseOut = () => {
    const { history, dispatch } = this.props;
    firebaseOut(history);
    dispatch(changeSingOut);
  };
}

const putStateToProps = (state: any) => {
  const { email, authorized, error, password, displayName, photoURL } = state;
  return {
    photoURL,
    email,
    authorized,
    error,
    password,
    displayName,
  };
};

const putActionsToProps = (dispatch: any) => ({
  changeAuthorized: bindActionCreators(changeAuthorized, dispatch),
});

// const putSignOutToProps = (dispatch: any) => ({
//   changeSingOut: bindActionCreators(changeSingOut, dispatch),
// });

// const WrapperHome = connect(putStateToProps)(Home);
const WrapperHome = connect(putStateToProps, putActionsToProps)(Home);

export { WrapperHome };
