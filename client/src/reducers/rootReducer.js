import { combineReducers } from 'redux';
import posts from './postReducer';
import helpDesks from './helpDeskReducer';
import helpDesksResolved from './helpDeskResolvedReducer';

const rootReducer = combineReducers({
  posts,
  helpDesks,
  helpDesksResolved,
});

export default rootReducer;
