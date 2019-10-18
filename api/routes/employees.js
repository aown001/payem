const express = require('express');
router = express.Router();

const { EmployeeController } = require('../controllers');

router.get('/', EmployeeController.getEmployees);
router.get('/:id', EmployeeController.getEmployee);
router.post('/', EmployeeController.createEmployee );
router.put('/:id', EmployeeController.updateEmployee);
router.delete('/:id', EmployeeController.deleteEmployee);

router.get('/contributions', EmployeeController.getContributions);
router.get('/contributions/:id', EmployeeController.getContribution);
router.post('/contribution', EmployeeController.createContribution );
router.put('/contribution/:id', EmployeeController.updateContribution);
router.delete('/contribution/:id', EmployeeController.deleteContribution);

router.get('/deductions', EmployeeController.getDeductions);
router.get('/deductions/:id', EmployeeController.getDeduction);
router.post('/deduction', EmployeeController.createDeduction );
router.put('/deduction/:id', EmployeeController.updateDeduction);
router.delete('/deduction/:id', EmployeeController.deleteDeduction);

module.exports = router;