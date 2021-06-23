// Module import
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';

// Reducer imports
import posts from 'redux/reducers/posts';

// Export combineReducers
export default combineReducers({
  posts,
  loadingBar: loadingBarReducer
});
