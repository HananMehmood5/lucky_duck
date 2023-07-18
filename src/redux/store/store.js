import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // You can choose different storage mechanisms, such as localStorage or sessionStorage
import thunk from 'redux-thunk';
import rootReducer from "../reducer"; // import your root reducer here

// Define a configuration object for redux-persist
const persistConfig = {
  key: "root", // key under which the state will be stored
  storage, // storage mechanism to use, such as localStorage or sessionStorage
  // Add any additional configuration options here, such as blacklist or whitelist
};

// Create a persisted reducer using persistReducer and your root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Enable Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store with the persisted reducer and any middleware you want to apply
const store = createStore(
  persistedReducer, // use the persisted reducer instead of the root reducer
  composeEnhancers(applyMiddleware(thunk))
);

// Create a persistor using persistStore and the Redux store
const persistor = persistStore(store);

export { store, persistor };
