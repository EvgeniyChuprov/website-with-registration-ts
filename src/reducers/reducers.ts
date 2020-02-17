import { combineReducers } from 'redux';

import { changeDateReducer } from './ChangeData/reducers';
import { rootReducer } from './store';

const combReducer = combineReducers({
  change: changeDateReducer,
  root: rootReducer,
});

export { combReducer };
