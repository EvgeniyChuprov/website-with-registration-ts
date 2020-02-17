import React from 'react';

import { firebaseApp } from '../../firebase/firebase';
import './style.scss';

interface IState {
  email: string,
  errorEmail: string,
}

class ResetPassword extends React.Component {
  public state: IState = {
    email: '',
    errorEmail: '',
  };

  render() {
    const { errorEmail } = this.state;
    return (
      <div className="reset-password">
        <h1>Сброс Пароля</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="reset-password__form-input"
            onChange={this.onChange}
            type="email"
            name="email"
            placeholder="ваш email"
          />
          {errorEmail && <p>{errorEmail}</p>}
          <div>
            <button
              type="submit"
              className="reset-password__button"
            >
              Отправить письмо для сброса пароля
            </button>
          </div>
        </form>
      </div>
    );
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { email } = this.state;
    event.preventDefault();

    firebaseApp.auth().sendPasswordResetEmail(email).then(() => {
      // Email sent.
      this.setState({ errorEmail: '' });
    })
      .catch((error) => {
        // An error happened.
        this.setState({ errorEmail: error.message });
      });
  };
}

export { ResetPassword };
