// Module import
import {hideLoading, showLoading} from 'react-redux-loading';
import objectifyArray from 'objectify-array';
import {toast} from 'react-toastify';

// API import
import api from 'redux/api';

// History object import
import history from 'redux/history';

// Type imports
import {ADD_POST, DELETE_POST, DELETE_POSTS, RECEIVE_POSTS} from './types';

/**
 * Handles add post request
 * @param {post} post
 * @return {Promise}
 */
export const handleAddPost = (post) => (dispatch) => {
  dispatch(showLoading());
  dispatch(addPost(post));

  return api
      .post(`/posts`, post)
      .then(({data}) => toast.success(data?.message))
      .catch(({response}) => {
        toast.error('Error adding post');
        console.log(response?.data?.message || response?.statusText);
        dispatch(deletePost(post.id));
      })
      .finally(() => dispatch(hideLoading()));
};

/**
 * Handles delete post request
 * @param {post} post
 * @return {Promise}
 */
export const handleDeletePost = (post) => (dispatch) => {
  dispatch(showLoading());
  dispatch(deletePost(post.id));

  return api
      .delete(`/posts/${post.id}`)
      .then(({data}) => toast.success(data?.message))
      .catch(({response}) => {
        toast.error('Error deleting post');
        console.log(response?.data?.message || response?.statusText);
        dispatch(addPost(post));
      })
      .finally(() => {
        dispatch(hideLoading());
        history.push('/');
      });
};

/**
 * Handles delete posts request
 * @return {Promise}
 */
export const handleDeletePosts = () => (dispatch, getState) => {
  const posts = getState().posts;
  dispatch(showLoading());
  dispatch(deletePosts());

  return api
      .delete('/posts')
      .then(({data}) => toast.success(data?.message))
      .catch(({response}) => {
        toast.error('Error deleting all post');
        console.log(response?.data?.message || response?.statusText);
        dispatch(receivePosts(posts));
      })
      .finally(() => dispatch(hideLoading()));
};

/**
 * Handles fetching posts when app starts
 * @return {Promise<array>}
 */
export const handleInitialData = () => (dispatch, getState) => {
  const statePost = getState().posts;
  dispatch(showLoading());

  return api
      .get(`/posts`)
      .then(({data}) => {
        toast.success(data?.message);
        dispatch(receivePosts(objectifyArray(data?.data)));
      })
      .catch(({response}) => {
        console.log(response?.data?.message || response?.statusText);
        return statePost ?
        toast.info('Posts fetched from memory') :
        toast.error('Error fetching posts');
      })
      .finally(() => dispatch(hideLoading()));
};

/**
 * Adds post to state
 * @param {post} post
 * @return {action}
 */
const addPost = (post) => ({type: ADD_POST, post});

/**
 * Deletes a post from state
 * @param {id} id
 * @return {action}
 */
const deletePost = (id) => ({type: DELETE_POST, id});

/**
 * Deletes all posts from state
 * @return {action}
 */
const deletePosts = () => ({type: DELETE_POSTS});

/**
 * Adds posts to state
 * @param {posts} posts
 * @return {action}
 */
const receivePosts = (posts) => ({type: RECEIVE_POSTS, posts});
