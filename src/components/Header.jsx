import React from "react";
import styles from './styles/Header.scss';

function Header(props){
  return (
    <div className = { styles.header }>
      <h1>Help Queue</h1>
    </div>
   );
}

export default Header;
