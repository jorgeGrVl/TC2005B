const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canVerVisitantes = require('../util/canVerVisitantes');
const canRegistrarVisitantes = require('../util/canRegistrarVisitante');
const visitantes_controller = require('../controllers/visitantes.controller');

router.get('/registrar', isAuth, canRegistrarVisitantes, visitantes_controller.get_registrar);
router.post('/registrar', isAuth, canRegistrarVisitantes, visitantes_controller.post_registrar);

router.get('/buscar/:valor', isAuth, canVerVisitantes, visitantes_controller.get_buscar);
router.get('/buscar/', isAuth, canVerVisitantes, visitantes_controller.get_buscar);

router.get('/consultar', isAuth, canVerVisitantes, visitantes_controller.get_lista);
router.get('/consultar/:id', isAuth, canVerVisitantes, visitantes_controller.get_lista);

module.exports = router;