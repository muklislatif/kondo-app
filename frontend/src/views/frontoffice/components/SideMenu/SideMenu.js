import React, { Component } from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom'


class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu clearfix col-12 block">
        <Link to={this.props.target} className="sm-back">
          <i className="sm-icon"></i>
        </Link>
        <h1 className="sm-title">{this.props.children}</h1>
      </div>
    );
  }
}

export default SideMenu;
