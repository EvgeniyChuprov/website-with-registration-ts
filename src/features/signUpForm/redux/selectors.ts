import { IAppReduxState } from 'shared/types/app';
import { ISignUpForm } from 'shared/types/models';

function selectFeatureState(state: IAppReduxState) {
  return state.signUpForm;
}

export function selectProfile(state: IAppReduxState): ISignUpForm {
  return selectFeatureState(state).edit.signUpForm;
}
