import c from './../constants';


export default (state = [], action) => {
  switch (action.type) {
    case c.ADD_TICKET:
      const { names, location, description, timeOpened, id } = action;
      return [
        ...state,
        {
          names : names,
          location : location,
          description : description,
          timeOpened : timeOpened,
          id: id
        }
      ]
    case c.RECEIVE_TICKET:
      console.log(state);
      let newState = state.slice();
      return newState.concat([action.ticket])
    case c.CLOSE_TICKET:
      const updatedTicketList = state.filter(ticket => ticket.id !== action.ticketId);
      return updatedTicketList
    default:
      return state;
  }
}
