// src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import posts from './postReducer';

const rootReducer = combineReducers({
  // short hand property names
  posts
})

export default rootReducer;
