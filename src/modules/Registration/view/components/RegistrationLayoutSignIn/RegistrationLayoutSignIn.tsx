import React from 'react';
import block from 'bem-cn';

import * as features from 'features';
import { withAsyncFeatures } from 'core';
import { useTranslation, tKeys } from 'services/i18n';

// import * as repositoriesSearch from 'features/repositoriesSearch';
// import { withAsyncFeatures } from 'core';
import { Layout } from '../../../../shared';

import './RegistrationLayoutSignIn.scss';

interface IFeatureProps {
  signInFormsFeatureEntry: features.signInForm.Entry;
}

type IProps = IFeatureProps;
const b = block('sign-in-page');
function RegistrationLayoutSignIn(props: IProps) {
  const { signInFormsFeatureEntry: { containers } } = props;
  const { SignInForm } = containers;
  const { t } = useTranslation();
  return (
    <Layout title={t(tKeys.features.registration.registrationSignIn)}>
      <div className={b()}>
        <div className={b('wrapper')}>
          <SignInForm />
        </div>
      </div>
    </Layout>
  );
}

const SignInPage = withAsyncFeatures({
  signInFormsFeatureEntry: features.signInForm.loadEntry,
})(RegistrationLayoutSignIn);

export { SignInPage, RegistrationLayoutSignIn /* , IProps as IProfileLayoutProps */ };
