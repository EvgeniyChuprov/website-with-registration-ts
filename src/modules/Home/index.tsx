import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSingOut } from '../../reducers/store';
import { firebaseOut } from '../../firebase/checkAuthorization';
import { firebaseApp } from '../../firebase/firebase';

interface IProps {
  email: string,
  history: {
    push: (arg: string) => void
  }
}

class Home extends React.Component<IProps> {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>Домашнаяя страница</h1>
        <p>Это ваша домашнаяя страница</p>
        <p>{email}</p>

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
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { history } = this.props;
    const { password, email } = this.state;

    const user = firebaseApp.auth().currentUser;
    user && user.updateProfile({
      displayName: 'Jane Q. User',
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
    console.log(user)
    event.preventDefault();
  };

  firebaseOut = () => {
    const { history } = this.props;
    firebaseOut(history);
  };

  updateUserProfile = () => {
    const user = firebaseApp.auth().currentUser;

    user.updateProfile({
      displayName: "Jane Q. User",
      // photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });
  };
}

const putStateToProps = (state: any) => {
  const { email, authorized, error, password, displayName } = state;
  return {
    email,
    authorized,
    error,
    password,
    displayName
  };
};

const putSignOutToProps = (dispatch: any) => ({
  changeSingOut: bindActionCreators(changeSingOut, dispatch),
});

const WrapperHome = connect(putStateToProps, putSignOutToProps)(Home);

export { WrapperHome };
