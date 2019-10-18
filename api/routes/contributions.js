const express = require('express');
router = express.Router();

const { ContributionController } = require('../controllers');

router.get('/', ContributionController.getContributions);
router.get('/:id', ContributionController.getContribution);
router.post('/', ContributionController.createContribution );
router.put('/:id', ContributionController.updateContribution);
router.delete('/:id', ContributionController.deleteContribution);

module.exports = router;