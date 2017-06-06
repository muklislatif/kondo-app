import { combineReducers } from 'redux';
import posts from './postReducer';
import helpDesks from './helpDeskReducer';

const rootReducer = combineReducers({
  posts,
  helpDesks,
});

export default rootReducer;
