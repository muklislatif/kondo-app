import React, { Component } from 'react';
import './FloatingActionButton.css';
import { Link } from 'react-router-dom'


class FloatingActionButton extends Component {
  render() {
    return (
      <Link to={this.props.target} className="floating-action-button">
          <i className="fcb-icon fcb-icon--add">{this.props.children}</i>
      </Link>
    );
  }
}

export default FloatingActionButton;
