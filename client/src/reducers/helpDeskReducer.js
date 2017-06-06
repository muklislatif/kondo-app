import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function helpDeskReducer(state = initialState.helpDesks, action) {
  switch (action.type) {
    case types.LOAD_HELPDESKS_SUCCESS:
      return action.helpDesks;
    default:
      return state;
  }
}

export function helpDeskDetailReducer(state = initialState.helpDeskDetail, action) {
  switch (action.type) {
    case types.GET_HELPDESK_DETAIL:
      return state.filter(helpDesk => (
        helpDesk.id === action.id
      ));
    default:
      return state;
  }
}
