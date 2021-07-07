import { AUTHORIZIRED, SIGNOUT } from '../ConstReducers';
import { initialState } from './reducers';

const changeAuthorized = (newStatusAuthorized: {}) => (
  {
    type: AUTHORIZIRED,
    payload: newStatusAuthorized,
  }
);

const changeSingOut = () => (
  {
    type: SIGNOUT,
    payload: initialState,
  }
);

export { changeAuthorized, changeSingOut };
