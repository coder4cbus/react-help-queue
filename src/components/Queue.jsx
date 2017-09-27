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
        contentFromFirebase = <TicketList ticketList = {newTicketArray} />
      }
    }

    return (
      <div>
        {contentFromFirebase}
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
