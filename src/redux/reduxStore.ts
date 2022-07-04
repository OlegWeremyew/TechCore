import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { settingsReducer } from './settingsReducer';

export const rootReducer = combineReducers({
  settings: settingsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
