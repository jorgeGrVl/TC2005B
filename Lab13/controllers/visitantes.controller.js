const Visitante = require('../models/visitantes.models');

exports.get_registrar = (request, response, next) => {
    response.render('registrar_visitante')
};

exports.post_registrar = (request, response, next) => {
    console.log(request.body);
    const visitante = new Visitante(request.body.nombre);
    visitante.save();
    console.log(Visitante.fetchAll());
    response.redirect('/visitantes/consultar')
};

exports.get_lista = (request, response, next) => {
    response.render('consultar_visitantes', {
      visitantes: Visitante.fetchAll(),
    });
};