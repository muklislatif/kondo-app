import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './ServiceProviderList.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import BottomNav from '../../components/BottomNav';
import ListItem from '../../components/ListItem';

import ImageDummy from './assets/dummy-avatar.png';

class ServiceProviderList extends Component {
  constructor(props) {
    super(props);
    this.state = { serviceProvider: [] };
  }

  render() {
    return (
      <div>
        <SideMenu target="/service-providers">
          Restaurants
        </SideMenu>
        <Wrapper>
          <div className="service-provider clearfix">
            <ul className="list-reset m0 p0">
              <ListItem hasAvatar>
                <img src={ImageDummy} alt="" className="li-avatar" />
                Dapur Cianjur
                <small className="li-small clearfix">Tower A, 1st floor</small>
                <a href="tel:+6285956566767" className="li-link">Dapur Cianjur</a>
              </ListItem>
              <ListItem hasAvatar>
                <img src={ImageDummy} alt="" className="li-avatar" />
                Dapur Sumatra
                <small className="li-small clearfix">Tower A, 1st floor</small>
                <a href="tel:+6285956566767" className="li-link">Dapur Sumatra</a>
              </ListItem>
              <ListItem hasAvatar>
                <img src={ImageDummy} alt="" className="li-avatar" />
                Dapur Jawa
                <small className="li-small clearfix">Tower A, 1st floor</small>
                <a href="tel:+6285956566767" className="li-link">Dapur Jawa</a>
              </ListItem>
              <ListItem hasAvatar>
                <img src={ImageDummy} alt="" className="li-avatar" />
                Dapur Indonesia
                <small className="li-small clearfix">Tower A, 1st floor</small>
                <a href="tel:+6285956566767" className="li-link">Dapur Indonesia</a>
              </ListItem>
            </ul>
          </div>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

ServiceProviderList.defaultProps = {
  helpDesks: {
    result: [],
    entities: {},
  },
};

ServiceProviderList.propTypes = {
  helpDesks: PropTypes.objectOf(PropTypes.any),
};

function mapStateToProps(state) {
  return {
    helpDesks: state.helpDesks,
  };
}

export default connect(mapStateToProps)(ServiceProviderList);
