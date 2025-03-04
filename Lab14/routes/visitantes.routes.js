const express = require('express');
const router = express.Router();
const visitantes_controller = require('../controllers/visitantes.controller');

router.get('/registrar', visitantes_controller.get_registrar);

router.post('/registrar', visitantes_controller.post_registrar);

router.get('/consultar', visitantes_controller.get_lista);

module.exports = router;