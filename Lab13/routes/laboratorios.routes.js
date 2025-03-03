const express = require('express');
const router = express.Router();
const laboratorios_controller = require('../controllers/laboratorios.controller')

router.get('/lab5', laboratorios_controller.get_lab5);

router.get('/lab6', laboratorios_controller.get_lab6);

module.exports = router;