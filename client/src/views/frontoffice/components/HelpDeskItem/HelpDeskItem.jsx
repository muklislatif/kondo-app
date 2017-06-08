import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import './HelpDeskItem.css';

const HelpDeskItem = ({ helpDesk }) => {
  const dateTime = helpDesk.created_at;
  const formattedDT = Moment(dateTime).fromNow();
  let statusString = '';
  let statusClass = '';

  switch (helpDesk.status) {
    case 'in-progress':
      statusClass = 'hdi--in-progress';
      statusString = 'In Progress';
      break;
    case 'completed':
      statusClass = 'hdi--completed';
      statusString = 'Completed';
      break;
    default:
      statusClass = 'hdi--requested';
      statusString = 'Requested';
  }

  return (
    <div
      className={
        `help-desk-item clearfix p2 left-align
        ${statusClass}
        ${helpDesk.is_public ? 'hdi--public' : 'hdi--personal'}`
      }
    >
      <Link className="hdi-link-block" to={`/help-desk/${helpDesk.id}`} />
      <div className="hdi-header clearfix">
        <div className="hdi-issue-category">
          <i className="hdi-issue-category__icon" />
          <span className="hdi-issue-category__name">{helpDesk.category}</span>
        </div>
        <div className="hdi-timestamps">
          <small title={dateTime}>
            {formattedDT}
          </small>
        </div>
      </div>
      <p className="hdi-content clearfix">{helpDesk.content}</p>
      <div className="hdi-footer clearfix">
        <div className="left">
          <span>{helpDesk.member_name}</span>
        </div>
        <div className="right bold">
          <span>{statusString}</span>
        </div>
      </div>
    </div>
  );
};

HelpDeskItem.defaultProps = {
  helpDesk: {},
};

HelpDeskItem.propTypes = {
  helpDesk: PropTypes.objectOf(PropTypes.any),
};

export default HelpDeskItem;
