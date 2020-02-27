import React from 'react';
import { block } from 'bem-cn';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { withTranslation, ITranslationProps, tKeys } from 'services/i18n';
import { withTranslation } from 'services/i18n';
import './SignUpForm.scss';


const b = block('sign-up-form');

function SignUpFormComponent() {
  return (
    <div className={b()}>
      <div>
        <Link to="/" className={b('link')}>
          Войти &rarr;
        </Link>
      </div>
      <h3 className={b('header')}>Регистрация</h3>
      <h3 className={b('zagl')}>Регистрация через картинки</h3>
      <p className={b('text')}>или</p>
      <form action="">
        <label htmlFor="mail">
          Email
          <input type="email" id="mail" />
        </label>
        <label htmlFor="password">
          Пароль
          <input type="password" id="password" />
        </label>
        <button type="submit">
          <Link to="/">
            Зарегистрироваться
          </Link>
        </button>
        <div>
          <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            Я не хочу получать рассылку
          </label>
        </div>
      </form>
    </div>
  );
}

// function mapState(state: IAppReduxState): IStateProps {
//   return {
//     signUp: selectors.selectProfile(state),
//   };
// }

const connectedComponent = connect()(SignUpFormComponent);
const SignUpForm = withTranslation()(connectedComponent);

export { SignUpForm };
// export { SignUpForm };
