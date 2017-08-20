export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TICKET':
      const { names, location, description, timeOpened } = action.ticketInfo;
      return [
        ...state,
        {
          names : names,
          location : location,
          description : description,
          timeOpened : timeOpened,
        }
      ]
    default:
      return state;
  }
}
