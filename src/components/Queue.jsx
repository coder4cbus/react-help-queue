import React from "react";
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import {connect} from 'react-redux';
import { firebase, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'

class Queue extends React.Component {

  constructor(props) {
    super(props);
    this.updateTicketTimeSinceOpened = this.updateTicketTimeSinceOpened.bind(this);
  }

  componentDidMount() {
    this.timeSinceOpenedChecker = setInterval(() =>
      this.updateTicketTimeSinceOpened(),
      5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timeSinceOpenedChecker);
  }

  updateTicketTimeSinceOpened() {
    this.forceUpdate();
  }

  render() {
    const { firebase, firebaseDatabaseObject } = this.props;
    console.log("RADICAL DATA FROM FIREBASE!", firebaseDatabaseObject);
    return (
      <div>
        <TicketList ticketList = {["hey"]}/>
        <NewTicketControl />
      </div>
    );
  }
}

const firebaseWrappedComponent = firebase(['/tickets'])(Queue);

export default connect(
  ({firebase}) => ({
    firebaseDatabaseObject: dataToJS(firebase, 'tickets')
  })
)(firebaseWrappedComponent);
