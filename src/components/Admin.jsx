import React from "react";
import TicketList from './TicketList';
import {connect} from 'react-redux';
import c from './../constants/constants';
import { firebase, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';

class Admin extends React.Component {

  constructor(props){
    super(props);
    this.handleClosingTicket = this.handleClosingTicket.bind(this);
  }

  handleClosingTicket(ticketId) {
    const { firebase } = this.props;
    firebase.remove(`/tickets/${ticketId}`);
  }

  render(){
    const { firebase, firebaseDatabaseObject } = this.props;
    let contentFromFirebase;
    if (!isLoaded(firebaseDatabaseObject)) {
      contentFromFirebase = "Loading";
    } else {
      if (isEmpty(firebaseDatabaseObject)) {
        contentFromFirebase = "No tickets in the queue!";
      } else {
        let newTicketArray = [];
        Object.keys(firebaseDatabaseObject).map(key => {
          newTicketArray.push(Object.assign(firebaseDatabaseObject[key], {"id": key}));
        })
        contentFromFirebase = <TicketList
          ticketList = {newTicketArray}  // Make sure to change this to newTicketArray!
          currentRoute= {this.props.location.pathname}
          handleClosingTicket = {this.handleClosingTicket}/>
      }
    }
    return(
      <div>
        <h3>Admin Page</h3>
        {contentFromFirebase}
      </div>
    )
  }
}

const firebaseWrappedComponent = firebase(['/tickets'])(Admin);

export default connect(
  ({firebase}) => ({
    firebaseDatabaseObject: dataToJS(firebase, 'tickets')
  })
)(firebaseWrappedComponent);
