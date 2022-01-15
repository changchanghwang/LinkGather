import { createStore, combineReducers } from 'redux';
import modal from './modules/modal';

const rootReducer = combineReducers({ modal });

const store = createStore(rootReducer);

export default store;
