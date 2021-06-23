// Module imports
const express = require('express');
const router = new express.Router();

// Posts Route
router.use('/posts', require('./posts'));

// Export API route
module.exports = router;
