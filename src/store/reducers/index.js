import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

const combinedReducer = combineReducers({
  contactReducer
});

export default combinedReducer;
