import React, { useState } from 'react';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PersonIcon from '@material-ui/icons/Person';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { Link } from 'react-router-dom';

export default props => {
  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)
  
  return (
    <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
      <Button color="info" onClick={props.toggle}>
        <FormatAlignLeftIcon />
      </Button>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to={'/site-map'}><AccountTreeIcon /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/my-account'}><PersonIcon /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/payroll-settings'}><SettingsApplicationsIcon /></NavLink>
          </NavItem>
      </Nav>
      </Collapse>
    </Navbar>
  );
}