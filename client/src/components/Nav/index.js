import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav class="nav navbackground">
      <a class="nav-link title" href="/">Google Book Search</a>
      <a class="nav-link btn btn-primary button" href="/">Search</a>
      <a class="nav-link btn btn-primary button" href="/saved">Saved</a>
    </nav>
  );
}

export default Nav;
