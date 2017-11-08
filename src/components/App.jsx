import React from "react";
import TicketList from './TicketList';
import Header from './Header';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';

function App(props){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={TicketList} />
      </Switch>
    </div>
  );
}

export default App;
