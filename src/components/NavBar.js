import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex clear-list space-around nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/ContactPage">Contacts</NavLink>
      <NavLink to="/StatisticsPage">Statistics</NavLink>
    </div>
  );
};
export default NavBar;
