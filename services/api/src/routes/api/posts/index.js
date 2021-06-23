// Module imports
const express = require('express');
const router = new express.Router();

// Custom module imports
const populateDB = require('./populate');
const getAll = require('./get');
const delAll = require('./del');
const getOne = require('./id/get');
const delOne = require('./id/del');
const postOne = require('./post');

// Routes
router.post('/populate', populateDB);
router.get('/', getAll);
router.delete('/', delAll);
router.get('/:id', getOne);
router.delete('/:id', delOne);
router.post('/', postOne);

// Export Route
module.exports = router;
