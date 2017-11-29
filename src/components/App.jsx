import React from "react";
import Header from './Header';
import Queue from './Queue';
import global from './styles/global.scss';

function App(props){
  return (
    <div className='exampleClass'>
      <Header/>
      <Queue/>
    </div>
  );
}

export default App;
