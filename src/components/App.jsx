import React from "react";
import TicketList from './TicketList';
import Header from './Header';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';

function App(props){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={TicketList} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
