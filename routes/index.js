const express = require('express');
const visitorsController = require('../controllers/visitors.js')
const router = express.Router();

router.get('/visitors', visitorsController.getVistitorsSummary);

module.exports = router ;