import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import Employees from '../employee/Employees';
import Employee from '../employee/Employee'
import TaxList from '../tax/TaxList';
import CodesList from '../codes/CodesList';
import ContributionList from '../contributions/ContributionList';
import DeductionList from '../deductions/DeductionList';
import Home from '../Home';
import PayRollRun from '../PayRoll/PayRollRun';
import Settings from '../Settings';
import SiteMap from '../SiteMap';
import Account from '../users/Account';
import DeductionsReport from '../reports/Deductions';
import ContributionsReport from '../reports/Contributions';
import BonusReport from '../reports/Bonus';
import TaxReport from '../reports/Tax';
import CategoryReport from '../reports/Category';

export default props => (
  <Container fluid className={classNames('content', { 'is-open': props.isOpen })}>
    <NavBar toggle={props.toggle} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/employees" component={Employees} />
      <Route exact path="/employee/:id" component={Employee} />
      <Route exact path="/payroll-settings" component={Settings} />
      <Route exact path="/run-payroll" component={PayRollRun} />
      <Route exact path="/codes" component={CodesList} />
      <Route exact path="/tax" component={TaxList} />
      <Route exact path="/contributions" component={ContributionList} />
      <Route exact path="/deductions" component={DeductionList} />
      <Route exact path="/my-account" component={Account} />
      <Route exact path="/site-map" component={SiteMap} />
      <Route exact path="/report/deductions" component={DeductionsReport} />
      <Route exact path="/report/contributions" component={ContributionsReport} />
      <Route exact path="/report/bonus" component={BonusReport} />
      <Route exact path="/report/tax" component={TaxReport} />
      <Route exact path="/report/category-wise" component={CategoryReport} />
    </Switch>
  </Container>
)