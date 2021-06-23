// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Component imports
import { Post } from 'components';

// Redux selector imports
import { getRemainingPostIDs } from 'redux/selectors';

/**
 * Posts component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <Posts />
 */
const Posts = ({ postIDs }) =>
  postIDs.length > 0 ? (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5" id="posts">
      {postIDs.map((id) => (
        <Post key={`post-${id}`} id={id} />
      ))}
    </div>
  ) : (
    <p className="text-center">No posts found</p>
  );

Posts.propTypes = {
  /**
   * Posts postIDs
   */
  postIDs: PropTypes.array
};

Posts.defaultProps = {
  postIDs: []
};

/**
 * Maps redux state to Posts component props
 * @param {state} state
 * @return {{postIDs: id[]}}
 */
const mapStateToProps = ({ posts }) => ({
  postIDs: getRemainingPostIDs(posts)
});

// Component export
export default connect(mapStateToProps)(Posts);
