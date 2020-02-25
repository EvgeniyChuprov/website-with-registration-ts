import React from 'react';
// import { Link } from 'react-router-dom';
import block from 'bem-cn';

import './SignUpPage.scss';
import { SignUpForm } from 'features/signUpForm/view/SignUpForm';

const b = block('sign-up-page');

function SignUpPage() {
  return (
    <div className={b()}>
      <div className={b('button')}>
        <SignUpForm />
      </div>
    </div>
  );
}

export { SignUpPage };
