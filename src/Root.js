import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import moviesReducer from './state/movies/reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
)