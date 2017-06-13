import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './ServiceProvider.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import BottomNav from '../../components/BottomNav';

class ServiceProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { serviceProvider: [] };
  }

  render() {
    return (
      <div>
        <SideMenu target="/">
          Service Providers
        </SideMenu>
        <Wrapper>
          <div className="service-provider clearfix">
            <ul className="list-item">
              <li className="clearfix li-item">
                <i className="li-icon sp-icon--restaurants" />
                Restaurants
                <i className="li-arrow" />
                <Link to="/service-providers/1" className="li-link">Restaurants</Link>
              </li>
              <li className="clearfix li-item">
                <i className="li-icon sp-icon--daily-supplies" />
                Daily Supplies
                <i className="li-arrow" />
                <Link to="/service-providers/2" className="li-link">Daily Supplies</Link>
              </li>
              <li className="clearfix li-item">
                <i className="li-icon sp-icon--cleaning-services" />
                Cleaning Services
                <i className="li-arrow" />
                <Link to="/service-providers/3" className="li-link">Cleaning Services</Link>
              </li>
              <li className="clearfix li-item">
                <i className="li-icon sp-icon--laundry-services" />
                Laundry Services
                <i className="li-arrow" />
                <Link to="/service-providers/4" className="li-link">Laundry Services</Link>
              </li>
            </ul>
          </div>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

ServiceProvider.defaultProps = {
  helpDesks: {
    result: [],
    entities: {},
  },
};

ServiceProvider.propTypes = {
  helpDesks: PropTypes.objectOf(PropTypes.any),
};

function mapStateToProps(state) {
  return {
    helpDesks: state.helpDesks,
  };
}

export default connect(mapStateToProps)(ServiceProvider);
