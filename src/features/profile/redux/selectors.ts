import { IAppReduxState } from 'shared/types/app';
import { IProfile } from 'shared/types/models';

function selectFeatureState(state: IAppReduxState) {
  console.log(1231,state.profile)
  return state.profile;
}

export function selectProfile(state: IAppReduxState): IProfile {
  return selectFeatureState(state).edit.profile;
}
