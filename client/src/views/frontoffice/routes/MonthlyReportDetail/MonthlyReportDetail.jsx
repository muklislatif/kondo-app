import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PDF from 'react-pdf-js';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './MonthlyReportDetail.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import BottomNav from '../../components/BottomNav';
import PDFViewer from '../../components/PDFViewer';

class MonthlyReportDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
  }

  render() {
    return (
      <div>
        <SideMenu target="/">
          Apr `17
        </SideMenu>
        <Wrapper>
          <PDFViewer />
        </Wrapper>
        <BottomNav />
      </div>
    );
  }
}

MonthlyReportDetail.defaultProps = {
  helpDesks: {
    result: [],
    entities: {},
  },
};

MonthlyReportDetail.propTypes = {
  helpDesks: PropTypes.objectOf(PropTypes.any),
};

function mapStateToProps(state) {
  return {
    helpDesks: state.helpDesks,
  };
}

export default connect(mapStateToProps)(MonthlyReportDetail);
