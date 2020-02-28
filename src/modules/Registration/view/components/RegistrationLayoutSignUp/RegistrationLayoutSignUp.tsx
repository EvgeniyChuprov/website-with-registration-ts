import React from 'react';
import block from 'bem-cn';

import * as features from 'features';
import { withAsyncFeatures } from 'core';
import { useTranslation, tKeys } from 'services/i18n';

// import * as repositoriesSearch from 'features/repositoriesSearch';
// import { withAsyncFeatures } from 'core';
import { Layout } from '../../../../shared';

import './RegistrationLayoutSignUp.scss';

interface IFeatureProps {
  signUpFormsFeatureEntry: features.signUpForm.Entry;
}

type IProps = IFeatureProps;
const b = block('sign-up-page');
function RegistrationLayoutSignUp(props: IProps) {
  const { signUpFormsFeatureEntry: { containers } } = props;
  const { SignUpForm } = containers;
  const { t } = useTranslation();
  return (
    <Layout title={t(tKeys.features.registration.registrationSignUp)}>
      <div className={b()}>
        <div className={b('wrapper')}>
          <SignUpForm />
        </div>
      </div>
    </Layout>
  );
}

const SignUpPage = withAsyncFeatures({
  signUpFormsFeatureEntry: features.signUpForm.loadEntry,
})(RegistrationLayoutSignUp);

export { SignUpPage, RegistrationLayoutSignUp /* , IProps as IProfileLayoutProps */ };
