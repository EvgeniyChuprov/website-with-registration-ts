import * as NS from '../../namespace';
import { initial } from '../initial';

function editReducer(state: NS.IReduxState['edit'] = initial.edit, action: NS.IAction): NS.IReduxState['edit'] {
  switch (action.type) {
    case 'SIGN_IN_FROM:SAVE_SIGN_IN_FROM': {
      return {
        ...state,
        signInForm: action.payload,
      };
    }
    default:
      return state;
  }
}

export { editReducer };
