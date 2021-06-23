/**
 * Selector to get latest post id
 * @param {posts} statePosts
 * @return {id}
 */
export const getLatestPostID = (statePosts) => getPosts(statePosts)[0]?.id;

/**
 * Checks if contents have been fetched
 * @param {state} state
 * @return {bool}
 */
export const getLoadedStatus = ({posts}) => Object.keys(posts || {}) > 1;

/**
 * Selector to get a post from state
 * @param {posts} statePosts
 * @param {id} id - Desired post id
 * @return {post}
 */
export const getPost = (statePosts, id) => statePosts[id];

/**
 * Selector to get post IDs array from posts state object
 * @param {posts} statePosts
 * @return {id[]}
 */
export const getPostIDs = (statePosts) =>
  getPosts(statePosts).map(({id}) => id);

/**
 * Selector to get posts array from posts state object
 * @param {posts} statePosts
 * @return {post[]}
 */
export const getPosts = (statePosts) =>
  Object.values(statePosts).sort((a, b) => b?.time - a?.time);

/**
 * Selector to get post IDs array from posts state object
 * @param {posts} statePosts
 * @return {id[]}
 */
export const getRemainingPostIDs = (statePosts) =>
  getPostIDs(statePosts).filter((it, i) => i !== 0);
