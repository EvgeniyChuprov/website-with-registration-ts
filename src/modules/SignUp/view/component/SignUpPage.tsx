import React from 'react';
// import block from 'bem-cn';

import * as features from 'features';
import { withAsyncFeatures } from 'core';
import { useTranslation, tKeys } from 'services/i18n';

// import * as repositoriesSearch from 'features/repositoriesSearch';
// import { withAsyncFeatures } from 'core';
import { Layout } from '../../../shared';

// import { SignUpForm } from 'features/signUpForm/view/containers/SignUpForm';

import './SignUpPage.scss';


// const b = block('sign-up-page');

// function SignUpLayoutComponent(props: IProps) {
function SignUpLayoutComponent() {
  // const { profileFeatureEntry: { containers } } = props;
  // const { ProfileEdit } = containers;
  const { t } = useTranslation();
  return (
    // <Layout title={t(tKeys.features.userSearch.repositoriesSearch)}>
    <Layout title={t(tKeys.features.signUp.signUp)}>
      {/* <div className={b()}>
        <div className={b('button')}>
          <SignUpForm />
        </div>
      </div> */}
    </Layout>
  );
}

const SignUpPage = withAsyncFeatures({
  signUpFeatureEntry: features.signUpForm.loadEntry,
})(SignUpLayoutComponent);

export { SignUpPage, SignUpLayoutComponent /* , IProps as IProfileLayoutProps */ };

// export { SignUpPage };
