const express = require('express');
const router = express.Router();

const path = require('path');
router.get('/mostrar', (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

const visitantes = [];

router.get('/registrar', (request, response, next) => {
    response.render('registrar_visitante')
});

router.post('/registrar', (request, response, next) => {
    console.log(request.body);
    visitantes.push(request.body.nombre);
    console.log(visitantes);
    response.render('consultar_visitantes', {
      visitantes: visitantes,
    });
});

router.get('/consultar', (request, response, next) => {
    response.render('consultar_visitantes', {
      visitantes: visitantes,
    });
});

module.exports = router;