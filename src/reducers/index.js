import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
import ticketList from './ticket-list-reducer';

const combinedReducer = combineReducers({
  firebase,
  ticketList
});

export default combinedReducer;
