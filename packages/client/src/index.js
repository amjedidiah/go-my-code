// Module imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';

// Bootstrap & popper.js
import 'bootstrap/dist/js/bootstrap.min';
import '@popperjs/core/dist/umd/popper.min';

// App component import
import App from 'app';

// Config imports
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
import reportWebVitals from 'reportWebVitals';

// SCSS import
import 'assets/sass/main.scss';

// Store import
import { persistor, store } from 'redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
reportWebVitals();
