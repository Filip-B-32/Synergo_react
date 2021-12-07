import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div class="sidebar">
      <Link to="/">About</Link>
      <Link to="/">Services</Link>
      <Link to="/">Clients</Link>
      <Link to="/">Contact</Link>
    </div>
  );
}

export default Sidebar;
