// import React from 'react';
// import block from 'bem-cn';

// import * as features from 'features';
// import { withAsyncFeatures } from 'core';
// import { useTranslation, tKeys } from 'services/i18n';

// import { Layout } from '../../../../shared';

// interface IFeatureProps {
//   profileFeatureEntry: features.profile.Entry;
// }

// type IProps = IFeatureProps;

// const b = block('profile-layout');

// function RegistrationLayoutComponent(props: IProps) {
//   // const { profileFeatureEntry: { containers } } = props;
//   // const { ProfileEdit } = containers;
//   const { t } = useTranslation();

//   return (
//     <Layout title={t(tKeys.features.profile.editProfile)}>
//       <div className={b()}>
//         {alert(1231)}
//         12311414124124
//         {/* <ProfileEdit /> */}
//         qweqeqweqeqw
//       </div>
//     </Layout>
//   );
// }

// const RegistrationLayout = withAsyncFeatures({
//   profileFeatureEntry: features.profile.loadEntry,
// })(RegistrationLayoutComponent);

// export { RegistrationLayout, RegistrationLayoutComponent, IProps as IRegistrationLayoutProps };