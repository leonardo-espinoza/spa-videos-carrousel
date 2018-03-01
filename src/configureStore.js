import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from './reducers/reducers';
import promiseMiddleware from 'redux-promise-middleware';

//function rootReducer(state = [], action) { return state; }
//let store = createStore(rootReducer, {});

let store = createStore(rootReducer, {}, applyMiddleware( promiseMiddleware() ));

export default store;