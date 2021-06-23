/* eslint-disable camelcase */
// Module imports
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, Redirect, withRouter} from 'react-router-dom';

// Asset imports
import ask from 'assets/images/ask.png';
import highlight from 'assets/images/highlight.png';
import job from 'assets/images/job.png';
import link from 'assets/images/link.png';

// Helper imports
import {formatTime} from 'helpers';

// Redux action imports
import {handleDeletePost} from 'redux/actions/posts';

// Redux selector imports
import {getPost} from 'redux/selectors';

/**
 * Post component
 * @component
 * @param {object} props
 * @return {object} - The UI DOM object
 *
 * @example
 * const id = ""
 * const isHighlighted = false
 * return <Post id={id} isHighlighted={isHighlighted} />
 */
const Post = (props) => {
  const {
    isHighlighted,
    match: {params},
    post: {
      id,
      title,
      points,
      user,
      time,
      time_ago,
      comments_count,
      type,
      url,
      domain,
    },
  } = props;
  const isRoute = params.id;

  const renderRouteProps = () =>
    isRoute && (
      <p>
        <span className="fw-bold">{points}</span> points {time_ago} |{' '}
        <span className="fw-bold">{comments_count}</span> comments
      </p>
    );

  return isRoute && id === undefined ? (
    <Redirect to="/" />
  ) : (
    <div className="col">
      <div
        className={`card card--post d-flex ${
          isHighlighted ? 'flex-lg-row' : 'flex-column'
        } ${isRoute ? '' : 'not-route'}`}
      >
        {type && (
          <div className="img-holder rounded">
            <img
              src={isHighlighted ? highlight : {ask, job}[type] || link}
              className="img-fluid card-img-top rounded"
              alt={title}
            />
          </div>
        )}
        <div className="card-body">
          {time && <p>{formatTime(time)}</p>}
          <hgroup>
            {title && <h4 className="fs-2 card-title">{title}</h4>}
            <h5>
              {type && (
                <span
                  className={`badge bg-${
                    {link: 'primary', job: 'success'}[type] ||
                    'primary--custom'
                  } me-2`}
                >
                  {type}
                </span>
              )}
              {domain && (
                <a href={url} className="btn btn-link">
                  {domain}
                </a>
              )}
            </h5>
          </hgroup>
          <p className="card-text"></p>
          {user && (
            <p className="text-right">
              by <span className="fw-bold">{user}</span>
            </p>
          )}
          {renderRouteProps()}
          <p>
            {!isRoute && (
              <Link className="btn btn-link me-3" to={`/posts/${id}`}>
                Read More &gt;
              </Link>
            )}
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target={`#deleteModal-${id}`}
            >
              Delete
            </button>
          </p>
        </div>
      </div>
      <div
        className="modal fade"
        id={`deleteModal-${id}`}
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete{' '}
              <span className="fw-bold">{title}</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => props.handleDeletePost(props?.post)}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  /**
   * Post post
   */
  post: PropTypes.object,
  /**
   * Post isHighlighted
   */
  isHighlighted: PropTypes.bool,
  /**
   * Post match
   */
  match: PropTypes.object,
  /**
   * Post handleDeletePost
   */
  handleDeletePost: PropTypes.func,
};

Post.defaultProps = {
  post: {
    title: '',
    points: 0,
    user: '',
    time: 0,
    time_ago: '',
    comments_count: 0,
    type: '',
    url: '',
    domain: '',
  },
  isHighlighted: false,
};

/**
 * Maps redux state to Post component props
 * @param {state} state
 * @param {{id: id, match: any}} ownProps
 * @return {{post: post}}
 */
const mapStateToProps = ({posts}, {id, match}) => ({
  post: getPost(posts, id || match?.params?.id),
});

// Component export
export default withRouter(
    connect(mapStateToProps, {handleDeletePost})(Post),
);
