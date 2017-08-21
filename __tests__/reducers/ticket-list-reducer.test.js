import ticketList from './../../src/reducers/ticket-list-reducer';
import c from './../../src/constants';

describe("Ticket list reducer", () => {
  let action;
  const ticketInfo = {
    names : [
      'Ryan',
      'Aimen'
    ],
    location : "4b",
    description : "Jest is being a diva and won't work well with webpack",
    timeOpened : 1500000000000,
    id: 0
  };

  test('should return equivalent state if no action type is recognized', () => {
    action = { type: null };
    expect(ticketList([], action)).toEqual([]);
  });

  test('should add ticket to list array', () => {
    action = {
      type: c.ADD_TICKET,
      ticketInfo : ticketInfo
    };
    const futureState = [ ticketInfo ];
    expect(ticketList([], action)).toEqual([ ticketInfo ]);
  });

});
