const express = require('express');
const ticketsController = require('../controllers/ticketsController');

const router = express.Router();
router.get('/', ticketsController.getAllTickets);
module.exports = router;
