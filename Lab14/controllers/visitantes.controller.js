const Visitante = require('../models/visitantes.models');

exports.get_registrar = (request, response, next) => {
    response.render('registrar_visitante', {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    });
};

exports.post_registrar = (request, response, next) => {
    console.log(request.body);
    const visitante = new Visitante(request.body.nombre);
    visitante.save();
    response.setHeader('Set-Cookie', `ultimo_visitante=${visitante.nombre}`);
    console.log(Visitante.fetchAll());
    response.redirect('/visitantes/consultar')
};

exports.get_lista = (request, response, next) => {
    console.log(request.get('Cookie'));
    response.render('consultar_visitantes', {
      visitantes: Visitante.fetchAll(),
      isLoggedIn : request.session.isLoggedIn || false,
      username : request.session.username || '',
    });
};