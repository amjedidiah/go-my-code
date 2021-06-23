// Module imports
import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import {Provider} from 'react-redux';
import {store} from 'redux/store';

// Component imports
import App from 'app';
import {Header, Home, Footer} from 'components';

describe('routes using memory router', () => {
  it('should show header, home and footer components for / route', () => {
    const component = mount(
        <MemoryRouter initialentries={['/']}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
    );

    expect(component.find(Header)).toHaveLength(1);
    expect(component.find(Home)).toHaveLength(1);
    expect(component.find(Footer)).toHaveLength(1);
  });
});
