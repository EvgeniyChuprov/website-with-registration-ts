import React from 'react';
import block from 'bem-cn';

import * as features from 'features';
import { withAsyncFeatures } from 'core';

interface IFeatureProps {
  profileFeatureEntry: features.profile.Entry;
}

type IProps = IFeatureProps;

const b = block('profile-layout');

function RegistrationLayoutComponent() {
  return (
    <div className={b()}>
      12311414124124
      {/* <ProfileEdit /> */}
      qweqeqweqeqw
    </div>
  );
}

const RegistrationLayout = withAsyncFeatures({
  profileFeatureEntry: features.profile.loadEntry,
})(RegistrationLayoutComponent);

export { RegistrationLayout, RegistrationLayoutComponent, IProps as IRegistrationLayoutProps };
