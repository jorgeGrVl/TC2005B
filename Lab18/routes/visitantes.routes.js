const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const visitantes_controller = require('../controllers/visitantes.controller');

router.get('/registrar', isAuth, visitantes_controller.get_registrar);

router.post('/registrar', isAuth, visitantes_controller.post_registrar);

router.get('/consultar', isAuth, visitantes_controller.get_lista);
router.get('/consultar/:id', isAuth, visitantes_controller.get_lista);

module.exports = router;