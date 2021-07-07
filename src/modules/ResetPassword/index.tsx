import React from 'react';

import { firebaseApp } from '../../firebase/firebase';
import { Button } from '../../features/Button';
import './style.scss';

interface IState {
  email: string,
  errorEmail: string,
  sentEmail: boolean,
}

class ResetPassword extends React.Component {
  public state: IState = {
    email: '',
    errorEmail: '',
    sentEmail: false,
  };

  render() {
    const { errorEmail, sentEmail } = this.state;
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
          {sentEmail && <p>Почта с инструкциями отправлена на ваш email</p>}
          <div>
            <Button
              name="Cбросить пароль"
            />
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
      this.setState({ errorEmail: '', sentEmail: true });
    })
      .catch((error) => {
        // An error happened.
        this.setState({ errorEmail: error.message });
      });
  };
}

export { ResetPassword };
