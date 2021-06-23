// Module imports
import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';

// App import
import App from 'app';

// Store import
import {store} from 'redux/store';

import Routes from 'routes';

// Shallow test App component

describe('<App />', () => {
  it('renders routes', () => {
    const appWithProvider = shallow(
        <Provider store={store}>
          <App />
        </Provider>,
    );
    appWithProvider.find(Routes);
  });

  it('renders toast container', () => {
    const appWithProvider = shallow(
        <Provider store={store}>
          <App />
        </Provider>,
    );
    appWithProvider.find(ToastContainer);
  });
});
