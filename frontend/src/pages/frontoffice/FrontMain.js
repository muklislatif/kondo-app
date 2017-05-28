import React, { Component } from 'react';
import 'ace-css/css/ace.min.css';
import 'normalize.css';
import './FrontMain.css';

import BottomNav from './components/BottomNav/BottomNav';

class FrontMain extends Component {
  render() {
    return (
      <div className="front-main">
        {this.props.children}
        <BottomNav />
      </div>
    );
  }
}

export default FrontMain;
