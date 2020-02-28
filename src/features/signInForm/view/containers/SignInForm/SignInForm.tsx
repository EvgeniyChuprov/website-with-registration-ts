import React from 'react';
import { block } from 'bem-cn';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { withTranslation, ITranslationProps, tKeys } from 'services/i18n';
import { withTranslation } from 'services/i18n';
import './SignInForm.scss';


const b = block('sign-in-form');

function SignInFormComponent() {
  return (
    <div className={b()}>
      <div>
        <Link to="/" className={b('link')}>
          Войти &rarr;
        </Link>
      </div>
      <h3 className={b('header')}>Вход</h3>
      <h3 className={b('zagl')}>Вход через картинки</h3>
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
            войти
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
//     signIn: selectors.selectProfile(state),
//   };
// }

const connectedComponent = connect()(SignInFormComponent);
const SignInForm = withTranslation()(connectedComponent);

export { SignInForm };
// export { SignInForm };
