import { normalize, schema } from 'normalizr';
import * as types from './actionTypes';
import helpDeskApi from '../api/helpDeskApi';

export function loadHelpDesks() {
  return function (dispatch) {
    console.log('anjing!!');
    return helpDeskApi.getAllHelpDesks().then((data) => {
      const helpDesksSchema = new schema.Entity('helpDesks');
      const helpDesksListSchema = new schema.Array(helpDesksSchema);
      const normalizedHelpDesks = normalize(data, helpDesksListSchema);
      dispatch(loadHelpDesksSuccess(normalizedHelpDesks));
    }).catch((error) => {
      throw (error);
    });
  };
}

export function loadHelpDesksResolved() {
  return function (dispatch) {
    return helpDeskApi.getAllHelpDesksResolved().then((data) => {
      const helpDesksResolvedSchema = new schema.Entity('helpDesksResolved');
      const helpDesksResolvedListSchema = new schema.Array(helpDesksResolvedSchema);
      const normalizedHelpDesksResolved = normalize(data, helpDesksResolvedListSchema);
      dispatch(loadHelpDesksResolvedSuccess(normalizedHelpDesksResolved));
    }).catch((error) => {
      throw (error);
    });
  };
}

export function loadHelpDesksSuccess(helpDesks) {
  return { type: types.LOAD_HELPDESKS_SUCCESS, helpDesks };
}

export function loadHelpDesksResolvedSuccess(helpDesksResolved) {
  return { type: types.LOAD_HELPDESKS_RESOLVED_SUCCESS, helpDesksResolved };
}

export function addHelpDesk(helpDesk) {
  return (dispatch, getState) => {
    const helpDesksAll = [...getState().helpDesks.result, ...getState().helpDesksResolved.result];
    const newHelpDesk = Object.assign({
      id: Math.max(0, ...helpDesksAll.map(b => b)) + 1,
    }, helpDesk);
    dispatch({
      type: types.ADD_HELPDESK,
      helpDesk: newHelpDesk,
    });
  };
}

