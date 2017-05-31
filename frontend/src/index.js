import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

// import { loadPosts } from './actions/postActions';

const store = configureStore();

// store.dispatch(loadPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
