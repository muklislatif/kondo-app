import * as types from './actionTypes';
import helpDeskApi from '../api/helpDeskApi';

export function loadHelpDesks() {
  return function(dispatch) {
    return helpDeskApi.getAllHelpDesks().then(helpDesks => {
      dispatch(loadHelpDesksSuccess(helpDesks));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadHelpDesksSuccess(helpDesks) {
  return {type: types.LOAD_HELPDESKS_SUCCESS, helpDesks};
}

export function getHelpDeskDetail(id) {
  return {type: types.GET_HELPDESK_DETAIL, id};
}
