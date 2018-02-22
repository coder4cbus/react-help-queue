import c from './../constants';
import { v4 } from 'uuid';
import firebase from 'firebase';

import firebaseConfig from './../apiKeys'
firebase.initializeApp(firebaseConfig);
const tickets = firebase.database().ref('tickets');

export function addTicket(_names, _location, _issue) {
  return () => tickets.push({
    names: _names,
    location: _location,
    description: _issue,
    timeOpened: new Date().getTime()
  })
  // tickets.push()
  // return {
  //   type: c.ADD_TICKET,
  //   id: v4(),
  //   names: _names,
  //   location: _location,
  //   description: _issue,
  //   timeOpened: new Date().getTime()
  // };
}

function receiveTicket(ticket) {
  return {
    type: c.RECEIVE_TICKET,
    ticket: ticket
  };
}

export function subscribeToTickets() {
  return function(dispatch) {
    tickets.on('child_added', data => {
      console.log('in subscribe:');
      console.log(data.val());
      dispatch(receiveTicket(data.val()))
    });
  }
}
