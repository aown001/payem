const express = require('express');
router = express.Router();

const { DeductionController } = require('../controllers');

router.get('/', DeductionController.getDeductions);
router.get('/:id', DeductionController.getDeduction);
router.post('/', DeductionController.createDeduction);
router.put('/:id', DeductionController.updateDeduction);
router.delete('/:id', DeductionController.deleteDeduction);

module.exports = router;