import React, { Component } from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import './HelpDeskItem.css';

class HelpDeskItem extends Component {
  render() {
    const dateTime = this.props.helpDesk.created_at;
    const formattedDT = Moment(dateTime).fromNow();
    let statusString = '';
    let statusClass = '';

    switch (this.props.helpDesk.status) {
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
          ${this.props.helpDesk.is_public ? 'hdi--public' : ''}`
        }
      >
        <Link className="hdi-link-block" to={`/help-desk/${this.props.helpDesk.id}`} />
        <div className="hdi-header clearfix">
          <div className="hdi-issue-category">
            <i className="hdi-issue-category__icon" />
            <span className="hdi-issue-category__name">{this.props.helpDesk.category}</span>
          </div>
          <div className="hdi-timestamps">
            <small title={dateTime}>
              {formattedDT}
            </small>
          </div>
        </div>
        <p className="hdi-content clearfix">{this.props.helpDesk.content}</p>
        <div className="hdi-footer clearfix">
          <div className="left">
            <span>{this.props.helpDesk.member_name}</span>
          </div>
          <div className="right bold">
            <span>{statusString}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpDeskItem;
