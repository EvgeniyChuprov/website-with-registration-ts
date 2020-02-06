import React from 'react';

import { firebaseApp } from '../../firebase/firebase';

interface IState {
  email: string,
  password: string,
  error: { message: string } | null,
}

class SingUp extends React.Component {
  public state: IState = {
    email: '',
    password: '',
    error: null,
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <h1>Регистрация</h1>
        <p>Заполните форму регистрации</p>

        <form onSubmit={this.handleSignUp}>
          <input
            onChange={this.onChange}
            type="email"
            name="email"
            placeholder="Ваш email"
          />
          <input
            onChange={this.onChange}
            type="password"
            name="password"
            placeholder="Ваш пароль"
          />
          <button type="submit">Зарегистрироваться</button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }

  handleSignUp = () => {
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
    firebaseApp.auth().createUserWithEmailAndPassword('q', '1')
      .catch(error => {
        console.log(error);
      });
  };
}

export { SingUp };
