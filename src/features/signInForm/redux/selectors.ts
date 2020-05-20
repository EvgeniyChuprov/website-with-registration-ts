import { IAppReduxState } from 'shared/types/app';
import { ISignInForm } from 'shared/types/models';

function selectFeatureState(state: IAppReduxState) {
  return state.signInForm;
}

export function selectProfile(state: IAppReduxState): ISignInForm {
  return selectFeatureState(state).edit.signInForm;
}
