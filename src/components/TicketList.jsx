import React from "react";
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          timeOpened={ticket.timeOpened}
          key={ticket.id}
          currentRoute={props.currentRoute}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array.isRequired,
  currentRoute: PropTypes.string,
  handleClosingTicket: PropTypes.func
};

export default TicketList;
