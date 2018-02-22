import c from './../constants';
import { v4 } from 'uuid';

export const test = 'test';

export function addTicket(_names, _location, _issue) {
  return {
    type: c.ADD_TICKET,
    id: v4(),
    names: _names,
    location: _location,
    description: _issue,
    timeOpened: new Date().getTime()
  };
}
