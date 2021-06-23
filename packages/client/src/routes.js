// Module imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component imports
import { Home, Layout, NotFound, Post } from 'components';

/**
 * Routes component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <Routes />
 */
const Routes = () => {
  /**
   * @const {route[]}
   */
  const routes = [
    { path: '/', Component: Home, exact: true },
    { path: '/posts/:id', Component: Post },
    { path: '*', Component: NotFound }
  ];

  return (
    <Router basename="/">
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={`route-${i}`}
            render={() => (
              <Layout>
                <route.Component />
              </Layout>
            )}
            {...route}
          />
        ))}
      </Switch>
    </Router>
  );
};

// Routes export
export default Routes;
