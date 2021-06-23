// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import {Footer, Header} from 'components';

/**
 * Layout component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const children = <></>
 * return <Layout>{children}</Layout>
 */
const Layout = ({children}) => (
  <>
    <Header />
    <main className="pt-5" id="main">{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  /**
   * Layout children
   */
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: <></>,
};

// Component export
export default Layout;
