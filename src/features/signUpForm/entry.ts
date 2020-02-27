import { makeFeatureEntry } from 'shared/helpers/makeFeatureEntry';

// import { actionCreators, selectors, reducer } from './redux';
// import { reducer } from './redux';
import * as containers from './view/containers';

const entry = makeFeatureEntry({
  containers,
  // actionCreators,
  // selectors,
  reduxEntry: {
    // reducers: { singUp: reducer },
    reducers: { },
  },
});

type Entry = typeof entry;
export { Entry, entry };
