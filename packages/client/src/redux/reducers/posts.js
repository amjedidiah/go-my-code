import {
  ADD_POST,
  DELETE_POST,
  DELETE_POSTS,
  RECEIVE_POSTS
} from 'redux/actions/types';

/**
 * Reducer function for posts
 * @param {posts} state - current posts state
 * @param {action} action - Redux action
 * @return {posts} - returned posts state
 */
const posts = (state = {}, { id, post, posts, type }) => {
  switch (type) {
    case DELETE_POST:
      delete state[id];
      return state;
    case DELETE_POSTS:
      return {};
    case RECEIVE_POSTS:
      return posts;
    case ADD_POST:
      return { ...state, [post?.id]: post };
    default:
      return state;
  }
};

export default posts;
