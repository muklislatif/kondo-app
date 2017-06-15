import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './MyActivities.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import BottomNav from '../../components/BottomNav';
import ListItem from '../../components/ListItem';

import ImageDummy from './assets/dummy-avatar.png';
import IconBillingPayment from './assets/icon-billing-and-payment.png';
import IconHelpDesk from './assets/icon-help-desk.png';

class MyActivities extends Component {
  constructor(props) {
    super(props);
    this.state = { serviceProvider: [] };
  }

  render() {
    return (
      <div>
        <SideMenu target="/">
          My Activities
        </SideMenu>
        <Wrapper>
          <div className="service-provider clearfix">
            <ul className="list-reset m0 p0">
              <ListItem hasAvatar className="li--blue">
                <img src={IconBillingPayment} alt="" className="li-avatar" />
                <span>Payment : Sep `16</span>
                <div className="clearfix li-info truncate">
                  <small className="li-small">
                    Total Rp. 350.000 | <i>Paid - 2 Aug, 12:15</i>
                  </small>
                </div>
                <i className="li-arrow" />
                <Link to="/" className="li-link">Payment : Sep `16</Link>
              </ListItem>
              <ListItem hasAvatar className="li--orange">
                <img src={IconHelpDesk} alt="" className="li-avatar" />
                <span>Parking : Sep `16</span>
                <div className="clearfix li-info truncate">
                  <small className="li-small">
                    Total Rp. 56.000 | <i>Requesting - 2 Aug, 12:15</i>
                  </small>
                </div>
                <i className="li-arrow" />
                <Link to="/" className="li-link">Parking : Sep `16</Link>
              </ListItem>
              <ListItem hasAvatar className="li--blue">
                <img src={IconHelpDesk} alt="" className="li-avatar" />
                <span>Parking : Sep `16</span>
                <div className="clearfix li-info truncate">
                  <small className="li-small">
                    Total Rp. 246.000 | <i>Resolved - 2 Aug, 12:15</i>
                  </small>
                </div>
                <i className="li-arrow" />
                <Link to="/" className="li-link">Parking : Sep `16</Link>
              </ListItem>
              <ListItem hasAvatar>
                <img src={ImageDummy} alt="" className="li-avatar" />
                <span>John</span>
                <div className="clearfix li-info truncate">
                  <small className="li-small">
                    <i>Lorem ipsum dolor sit amet.</i>
                  </small>
                </div>
                <i className="li-quote" />
                <Link to="/" className="li-link">Parking : Sep `16</Link>
              </ListItem>
            </ul>
          </div>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

MyActivities.defaultProps = {
  helpDesks: {
    result: [],
    entities: {},
  },
};

MyActivities.propTypes = {
  helpDesks: PropTypes.objectOf(PropTypes.any),
};

function mapStateToProps(state) {
  return {
    helpDesks: state.helpDesks,
  };
}

export default connect(mapStateToProps)(MyActivities);
