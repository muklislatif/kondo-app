import * as types from './actionTypes';
import postApi from '../api/postApi';

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function loadPosts() {
  return function thunk(dispatch) {
    return postApi.getAllPosts().then((posts) => {
      dispatch(loadPostsSuccess(posts));
    }).catch((error) => {
      throw (error);
    });
  };
}

export function addPost(post) {
  return { type: types.ADD_POST, post };
}
