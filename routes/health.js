const express = require('express');
const healthController = require('../controllers/health.js')
const router = express.Router();

router.get('/', healthController.checkApiHealth);

module.exports = router ;