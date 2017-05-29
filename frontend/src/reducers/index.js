import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import posts from './posts';

// Combine all our reducers togeher
const rootReducer = combineReducers({ posts, routing: routerReducer });

export default rootReducer;
