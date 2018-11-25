import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import App from './containers/App';
import moviesReducer from './state/movies/reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(rootReducer);

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
)