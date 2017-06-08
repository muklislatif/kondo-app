import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './postReducer';
import helpDesks from './helpDeskReducer';
import helpDesksResolved from './helpDeskResolvedReducer';

const rootReducer = combineReducers({
  posts,
  helpDesks,
  helpDesksResolved,
  form: formReducer,
});

export default rootReducer;
