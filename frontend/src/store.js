import { createStore } from 'redux';
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/index';
import posts from './data/posts';

const defaultState = {
  posts
};

const store = createStore(rootReducer, defaultState);

export const history = createHistory();

export default store;
