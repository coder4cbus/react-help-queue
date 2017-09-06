import React from "react";
import TicketList from './TicketList';
import {connect} from 'react-redux';

class Admin extends React.Component {
  render(){
    return(
      <div>
        <h3>Admin Page</h3>
        <TicketList
          ticketList = {this.props.adminMasterTicketList}
          currentRoute= {this.props.location.pathname}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    adminMasterTicketList : state
  }
}

export default connect(mapStateToProps)(Admin);
