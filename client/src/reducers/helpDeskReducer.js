import * as types from '../actions/actionTypes';

const initialState = {
  helpDesks: {
    result: [],
    entities: {
      helpDesks: {},
    },
  },
};

export default function helpDeskReducer(state = initialState.helpDesks, action) {
  switch (action.type) {
    case types.LOAD_HELPDESKS_SUCCESS:
      return action.helpDesks;
    case types.ADD_HELPDESK:
      return Object.assign({},
        {
          result: [
            action.helpDesk.id,
            ...state.result,
          ],
          entities: {
            helpDesks: Object.assign(
              { [action.helpDesk.id]: action.helpDesk },
              state.entities.helpDesks,
            ),
          },
        });
    default:
      return state;
  }
}
