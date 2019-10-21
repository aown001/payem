const EmployeeController = require('./employees');
const TaxController = require('./tax');
const ContributionController = require('./contribution');
const DeductionController = require('./deduction');
const CodeController = require('./code');
const PayrollController = require('./payroll');
const AuthController = require('./auth');

module.exports = {
    EmployeeController,
    TaxController,
    ContributionController,
    DeductionController,
    CodeController,
    PayrollController,
    AuthController
}