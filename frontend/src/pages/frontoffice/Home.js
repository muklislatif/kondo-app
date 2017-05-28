import React, { Component } from 'react';
import FrontMain from './FrontMain';
import Carousel from './components/Carousel/Carousel';
import MainMenu from './components/MainMenu/MainMenu';

class Home extends Component {
  render() {
    return (
      <FrontMain>
        <Carousel />
        <MainMenu />
      </FrontMain>
    );
  }
}

export default Home;
