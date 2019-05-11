import React from 'react';
import { Nav, NavItem } from 'reactstrap';

import {NavLink} from 'react-router-dom';
const Navigation = () => (
  <Nav>
    <NavItem>
      <NavLink to='/' activeClassName="active" className="nav-link">Home</NavLink>
    </NavItem>
  </Nav>
)
export default Navigation;