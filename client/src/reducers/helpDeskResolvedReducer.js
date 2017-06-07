import * as types from '../actions/actionTypes';

const initialState = {
  helpDesksResolved: {
    result: [],
    entities: {
      helpDesksResolved: {},
    },
  },
};

export default function helpDeskReducer(state = initialState.helpDesksResolved, action) {
  switch (action.type) {
    case types.LOAD_HELPDESKS_RESOLVED_SUCCESS:
      return action.helpDesksResolved;
    default:
      return state;
  }
}
