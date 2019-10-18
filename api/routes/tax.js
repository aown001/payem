const express = require('express');
router = express.Router();

const { TaxController } = require('../controllers');

router.get('/', TaxController.getTaxs);
router.get('/:id', TaxController.getTax);
router.post('/', TaxController.createTax );
router.put('/:id', TaxController.updateTax);
router.delete('/:id', TaxController.deleteTax);

module.exports = router;