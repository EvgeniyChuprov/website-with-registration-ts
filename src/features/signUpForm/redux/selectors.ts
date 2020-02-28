import { IAppReduxState } from 'shared/types/app';
import { ISignUpForm } from 'shared/types/models';

function selectFeatureState(state: IAppReduxState) {
  console.log(6666, state.signUpForm)
  return state.signUpForm;
}

export function selectProfile(state: IAppReduxState): ISignUpForm {
  return selectFeatureState(state).edit.signUpForm;
}
