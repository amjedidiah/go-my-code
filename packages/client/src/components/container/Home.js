// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Component imports
import {Post, Posts} from 'components';

// Redux selector imports
import {getLatestPostID} from 'redux/selectors';

/**
 * Home component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <Home />
 */
const Home = ({latestPostID}) => (
  <section className="container pt-5 mt-5">
    <article className="row mb-5 pb-lg-3">
      <h1 className="display-3 mb-4">The News</h1>
      <Post id={latestPostID} isHighlighted />
    </article>
    <Posts />
  </section>
);

Home.propTypes = {
  /**
   * Home latestPostID
   */
  latestPostID: PropTypes.number,
};

Home.defaultProps = {
  latestPostID: 0,
};

/**
 * Maps redux state to Home component props
 * @param {state} state
 * @return {{latestPostID: id}}
 */
const mapStateToProps = ({posts}) => ({
  latestPostID: getLatestPostID(posts),
});

// Component export
export default connect(mapStateToProps)(Home);
