import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './MonthlyReport.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import BottomNav from '../../components/BottomNav';

class MonthlyReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
  }

  render() {
    return (
      <div>
        <SideMenu target="/">
          Monthly Report
        </SideMenu>
        <Wrapper>
          <ul className="list-item">
            <li className="clearfix li-item">
              <i className="li-icon mr-icon--date" />
              Apr `17
              <i className="li-arrow" />
              <Link to="/monthly-report/1" className="li-link">Apr `17</Link>
            </li>
            <li className="clearfix li-item">
              <i className="li-icon mr-icon--date" />
              Mar `17
              <i className="li-arrow" />
              <Link to="/monthly-report/1" className="li-link">Mar `17</Link>
            </li>
            <li className="clearfix li-item">
              <i className="li-icon mr-icon--date" />
              Feb `17
              <i className="li-arrow" />
              <Link to="/monthly-report/1" className="li-link">Feb `17</Link>
            </li>
          </ul>
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

MonthlyReport.defaultProps = {
  helpDesks: {
    result: [],
    entities: {},
  },
};

MonthlyReport.propTypes = {
  helpDesks: PropTypes.objectOf(PropTypes.any),
};

function mapStateToProps(state) {
  return {
    helpDesks: state.helpDesks,
  };
}

export default connect(mapStateToProps)(MonthlyReport);
