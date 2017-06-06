import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import configureStore from './store/configureStore';
import { loadPosts } from './actions/postActions';
import { loadHelpDesks } from './actions/helpDeskActions';

const store = configureStore();
store.dispatch(loadPosts());
store.dispatch(loadHelpDesks());

class App extends Component {
  componentDidMount() {
    const splashScreen = document.getElementById('splash-screen'); // eslint-disable-line
    setTimeout(() => {
      if (splashScreen) {
        splashScreen.parentNode.removeChild(splashScreen);
      }
    }, 3000);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
