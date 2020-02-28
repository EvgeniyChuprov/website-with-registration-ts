import { ISignUpForm } from 'shared/types/models';
import { IAction } from 'shared/types/redux';

export interface IReduxState {
  edit: {
    signUpForm: ISignUpForm;
  };
}

export type ISignUpFormEditFormFields = ISignUpForm;

export type ISaveISignUpForm = IAction<'SIGN_UP_FROM:SAVE_SIGN_UP_FROM', ISignUpFormEditFormFields>;

export type IAction = ISaveISignUpForm;
