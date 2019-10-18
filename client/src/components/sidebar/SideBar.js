import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import LabelIcon from '@material-ui/icons/Label';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PaymentIcon from '@material-ui/icons/Payment';
import CategoryIcon from '@material-ui/icons/Category';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import SubMenu from './SubMenu';
import { Link } from 'react-router-dom';
import logo from '../../assets/payem_logo.svg';
import Divider from '@material-ui/core/Divider';

const submenus = [
  [
    {
      title: "Tax",
      target: "/tax",
      icon: <AttachMoneyIcon />
    },
    {
      title: "Contributions",
      target: "/contributions",
      icon: <TrendingUpIcon />
    },
    {
      title: "Deductions",
      target: "/deductions",
      icon: <TrendingDownIcon />
    },
    {
      title: "Codes",
      target: "/codes",
      icon: <LabelIcon />
    },
    {
      title: "Payroll",
      target: "/payroll-settings",
      icon: <PaymentIcon />
    }
  ],

  [
    {
      title: "Tax Report",
      target: "/report/tax",
      icon: <AttachMoneyIcon />
    },
    {
      title: "Bonus",
      target: "/report/bonus",
      icon: <TrendingUpIcon />
    },
    {
      title: "Contributions",
      target: "/report/contributions",
      icon: <TrendingUpIcon />
    },
    {
      title: "Deductions",
      target: "/report/deductions",
      icon: <TrendingDownIcon />
    },
    {
      title: "Category Wise",
      target: "/report/category-wise",
      icon: <CategoryIcon />
    },
  ],
]

const SideBar = props => (
  <div className={classNames('sidebar', { 'is-open': props.isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={props.toggle} style={{ color: '#fff' }}>&times;</span>
      {/* <h3>Pay'Em</h3> */}
      <NavLink className="mb-2" tag={Link} to={'/'}>
        <img src={logo} width={130} height={130} className="pt-3 ml-4 pb-3" alt="" />
      </NavLink>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3 mt-4 ml-3">
        {/* <p>Admin Dashboard</p> */}
        <Divider />
        <NavItem>
          <NavLink className="mb-2" tag={Link} to={'/employees'}>
            <PeopleIcon className="mr-2" />
            Employees
            </NavLink>
        </NavItem>
        <Divider />
        <SubMenu title="Settings" Icon={SettingsApplicationsIcon} items={submenus[0]} />
        <Divider />
        <SubMenu title="Reports" Icon={LibraryBooksIcon} items={submenus[1]} />
        <Divider />
      </Nav>
    </div>
  </div>
);

export default SideBar;