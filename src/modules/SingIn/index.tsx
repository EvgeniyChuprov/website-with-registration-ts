import React from 'react';

import { firebaseApp } from '../../firebase/firebase';

interface IState {
  email: string,
  password: string,
  error: {message: string} | null,
}

class SingIn extends React.Component {
  public state: IState = {
    email: '',
    password: '',
    error: null,
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <h1>Старница входа</h1>
        <p>Введите свой логин и пароль</p>

        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type="email"
            name="email"
            placeholder="ваш email"
          />
          <input
            onChange={this.onChange}
            type="password"
            name="password"
            placeholder="ваш пароль"
          />
          <button type="submit">Войти</button>
          { error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = () => {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
  };
}

export { SingIn };
