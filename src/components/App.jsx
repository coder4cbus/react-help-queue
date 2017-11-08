import React from "react";
import TicketList from './TicketList';
import newTicketForm from './newTicketForm';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(props){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={TicketList} />
        <Route path="/new-ticket" component={newTicketForm} />
      </Switch>
    </div>
  );
}

export default App;
