// Module import
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combined reducers import
import reducers from './reducers';

// Middleware import
import middleware from './middleware';

/**
 * @type {{key: string, storage: object, whitelist: string[]}}
 */
const persistConfig = {
  key: process.env.REACT_APP_PERSIST_CONFIG_KEY,
  timeout: null,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

/**
 * Redux store
 * @type {store}
 */
export const store = createStore(persistedReducer, middleware);

/**
 * @type {any}
 */
export const persistor = persistStore(store);
