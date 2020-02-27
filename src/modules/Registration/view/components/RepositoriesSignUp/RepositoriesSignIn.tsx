import React from 'react';
import block from 'bem-cn';

import * as features from 'features';
import { withAsyncFeatures } from 'core';

interface IFeatureProps {
  profileFeatureEntry: features.profile.Entry;
}

type IProps = IFeatureProps;

const b = block('profile-layout');

function RepositoriesSignInLayoutComponent() {
  return (
    <div className={b()}>
      rerererererer
      {/* <ProfileEdit /> */}
      qweqeqweqeqw
    </div>
  );
}

const RegistrationLayout = withAsyncFeatures({
  profileFeatureEntry: features.profile.loadEntry,
})(RepositoriesSignInLayoutComponent);

export {
  RegistrationLayout, RepositoriesSignInLayoutComponent,
  IProps as IRegistrationLayoutProps,
};
