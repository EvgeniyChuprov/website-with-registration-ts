import { ISignInForm } from 'shared/types/models';
import { IAction } from 'shared/types/redux';

export interface IReduxState {
  edit: {
    signInForm: ISignInForm;
  };
}

export type ISignInFormEditFormFields = ISignInForm;

export type ISaveISignInForm = IAction<'SIGN_IN_FROM:SAVE_SIGN_IN_FROM', ISignInFormEditFormFields>;

export type IAction = ISaveISignInForm;
