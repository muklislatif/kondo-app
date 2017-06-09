import { normalize, schema } from 'normalizr';
import * as types from './actionTypes';
import postApi from '../api/postApi';

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function loadPosts() {
  return function thunk(dispatch) {
    return postApi.getAllPosts().then((data) => {
      const postsSchema = new schema.Entity('posts');
      const postsListSchema = new schema.Array(postsSchema);
      const normalizedPosts = normalize(data, postsListSchema);
      dispatch(loadPostsSuccess(normalizedPosts));
    }).catch((error) => {
      throw (error);
    });
  };
}

export function addPost(post) {
  return (dispatch, getState) => {
    const postsAll = [...getState().posts.result];
    const newPost = Object.assign({
      id: Math.max(0, ...postsAll.map(b => b)) + 1,
    }, post);
    dispatch({
      type: types.ADD_POST,
      post: newPost,
    });
  };
}
