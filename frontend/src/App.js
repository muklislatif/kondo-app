import React, { Component } from 'react';
import Routes from './routes';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {
  componentDidMount() {
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
      if (splashScreen) {
        splashScreen.parentNode.removeChild(splashScreen);
      }
    }, 3000)
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
