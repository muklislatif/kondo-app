import * as types from '../actions/actionTypes';

const initialState = {
  posts: {
    result: [],
    entities: {
      posts: {},
    },
  },
};


export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    case types.ADD_POST:
      return Object.assign({},
        {
          result: [
            action.post.id,
            ...state.result,
          ],
          entities: {
            posts: Object.assign(
              { [action.post.id]: action.post },
              state.entities.posts,
            ),
          },
        });
    default:
      return state;
  }
}
