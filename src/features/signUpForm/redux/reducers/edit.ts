import * as NS from '../../namespace';
import { initial } from '../initial';

function editReducer(state: NS.IReduxState['edit'] = initial.edit, action: NS.IAction): NS.IReduxState['edit'] {
  switch (action.type) {
    case 'SIGN_UP_FROM:SAVE_SIGN_UP_FROM': {
      return {
        ...state,
        signUpForm: action.payload,
      };
    }
    default:
      return state;
  }
}

export { editReducer };
