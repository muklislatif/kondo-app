import * as types from '../actions/actionTypes';
import initialState from './initialState';
import Moment from 'moment';

export default function postReducer(state = initialState.posts, action) {
  switch(action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    case types.ADD_POST:
      return [
        {
          "id": 2,
          "content": action.post.content,
          "is_pinned": 1,
          "status": "published",
          "member_id": 1,
          "member_name": "Arian Pradana",
          "member_role": "Owner",
          "member_avatar": "http://placehold.it/100x100",
          "created_at": Moment.utc().local(),
          "updated_at": null
        },
        ...state
      ];
    default:
      return state;
  }
}
