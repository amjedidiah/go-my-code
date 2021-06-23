// Module imports
import React, {Component, Suspense} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {LoadingBar} from 'react-redux-loading';
import {ToastContainer} from 'react-toastify';

// Action imports
import {handleInitialData} from 'redux/actions/posts';

// Routes import
import Routes from 'routes';

// Selector imports
import {getLoadedStatus} from 'redux/selectors';

/**
 * App component
 * @component
 * @example
 * return <App />
 */
class App extends Component {
  static propTypes = {
    /**
     * App handleInitialData
     */
    handleInitialData: PropTypes.func,
    /**
     * App loading
     */
    loading: PropTypes.bool,
  };

  static defaultProps = {
    handleInitialData: () => {},
    loading: true,
  };

  /**
   * Executes once component mounts
   * @return {actionCreator}
   */
  componentDidMount = () => this.props.handleInitialData();

  /**
   * Renders the App UI
   * @return {object} - The UI DOM object
   */
  render = () => (
    <Suspense fallback={<LoadingBar />}>
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Suspense>
  );
}

/**
 * Maps redux state to component props
 * @param {state} state
 * @return {{loading: boolean}}
 */
const mapStateToProps = (state) => ({loading: getLoadedStatus(state)});

// Component export
export default connect(mapStateToProps, {handleInitialData})(App);
