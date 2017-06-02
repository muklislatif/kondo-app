import React, { Component } from 'react';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';

import Carousel from '../../components/Carousel';
import MainMenu from '../../components/MainMenu';
import BottomNav from '../../components/BottomNav';

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <MainMenu />
        <BottomNav />
      </div>
    );
  }
}

export default Home;
