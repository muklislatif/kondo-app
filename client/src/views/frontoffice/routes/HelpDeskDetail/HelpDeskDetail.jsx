import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Moment from 'moment';

import 'ace-css/css/ace.min.css';
import 'normalize.css';
import '../../styles/frontoffice.css';
import './HelpDeskDetail.css';

import SideMenu from '../../components/SideMenu';
import Wrapper from '../../components/Wrapper';
import Box from '../../components/Box';
import UserMedia from '../../components/UserMedia';
import BottomNav from '../../components/BottomNav';

const HelpDeskDetail = ({ helpDesks, match }) => {
  const helpDesk = helpDesks[match.params.id];
  let categoryIconType = '';
  let categoryIcon = '';

  if (!helpDesk) {
    return (
      <div>Loading...</div>
    );
  }

  switch (helpDesk.is_public) {
    case true:
      categoryIconType = 'hdd-category__icon--public';
      break;
    case false:
      categoryIconType = 'hdd-category__icon--personal';
      break;
    default:
      categoryIconType = '';
  }

  switch (helpDesk.category) {
    case 'Maintenance':
      categoryIcon = 'hdd-category__icon--maintenance';
      break;
    case 'House Keeping':
      categoryIcon = 'hdd-category__icon--housekeeping';
      break;
    default:
      categoryIcon = '';
  }

  return (
    <div>
      <SideMenu target="/help-desk">
        {helpDesk.status === 'completed' ? 'Resolved Issues' : 'Open Issues'}
      </SideMenu>
      <Wrapper>
        <div className="help-desk-detail clearfix">
          <Box className="p2 mb2">
            <div className="hdd-header relative clearfix">
              <UserMedia
                name={helpDesk.member_name}
                userRole="Owner"
                avatarPath="http://placehold.it/100x100"
              />
              <div className="hdd-timestamps">
                <small title={helpDesk.created_at}>
                  { Moment(helpDesk.created_at).fromNow() }
                </small>
              </div>
            </div>
            <div className="clearfix">
              <p className="hdd-content h5">
                {helpDesk.content}
              </p>
            </div>
            <div className="clearfix">
              <div className="right h5">
                <span className="hdd-category__name">
                  <i className={classNames('hdd-category__icon', categoryIconType)} />
                  { helpDesk.is_public ? 'Public' : 'Personal' },
                </span>
                <span className="hdd-category__name">
                  <i className={classNames('hdd-category__icon', 'hdd-category__icon--category', categoryIcon)} />
                  { helpDesk.category }
                </span>
              </div>
            </div>
            <div className="clearfix">
              <h1 className="bold h5">Detail Status</h1>
            </div>
          </Box>
          <Box className="hdd-detail-item p2 mb2 h5">
            <span className="hdd-dropcaps">1.</span>
            <div className="clearfix">
              <small className="hdd-detail-timestamps">20 April 2017, 15:05</small>
            </div>
            <div className="clearfix">
              Requested and has received by Management.
            </div>
          </Box>
          <Box className="hdd-detail-item p2 mb2 h5">
            <span className="hdd-dropcaps">2.</span>
            <div className="clearfix">
              <small className="hdd-detail-timestamps">20 April 2017, 15:05</small>
            </div>
            <div className="clearfix">
              Management has assigned XXX to process.
            </div>
          </Box>
          <Box className="hdd-detail-item p2 mb2 h5">
            <span className="hdd-dropcaps">3.</span>
            <div className="clearfix">
              <small className="hdd-detail-timestamps">20 April 2017, 15:05</small>
            </div>
            <div className="clearfix">
              The issue has been resolved.
            </div>
          </Box>
        </div>
      </Wrapper>
      <BottomNav />
    </div>
  );
};

HelpDeskDetail.defaultProps = {
  helpDesks: {},
  match: {},
};

HelpDeskDetail.propTypes = {
  helpDesks: PropTypes.objectOf(PropTypes.object),
  match: PropTypes.objectOf(PropTypes.any),
};

function mapStateToProps(state) {
  return {
    // Get all item whether open or resolved
    helpDesks: Object.assign({}, state.helpDesks.entities.helpDesks,
      state.helpDesksResolved.entities.helpDesksResolved),
  };
}

export default connect(mapStateToProps)(HelpDeskDetail);
