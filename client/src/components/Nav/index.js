import React from "react";
import { Badge } from 'reactstrap';
import "./style.css";

function Nav() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary navstyle">
      <a className="navbar-brand" href="/">
        Stock Literacy Game
      </a>
      <a>
        <Badge pill id="navBadge">Your Score:  $112</Badge>
      </a>
    </nav>
    
  );
}

export default Nav;
