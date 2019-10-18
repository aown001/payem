const express = require('express');
router = express.Router();

const { CodeController } = require('../controllers');

router.get('/', CodeController.getCodes);
router.get('/:id', CodeController.getCode);
router.post('/', CodeController.createCode );
router.put('/:id', CodeController.updateCode);
router.delete('/:id', CodeController.deleteCode);

module.exports = router;