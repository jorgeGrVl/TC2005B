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
    visitante.save()
        .then(() => {
            request.session.info = `Visitante ${visitante.nombre} registrado`;
            response.redirect('/visitantes/consultar');
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.get_lista = (request, response, next) =>{
    console.log(request.get('Cookie'));
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }
    Visitante.fetch(request.params.id)
        .then(([rows, fielData]) => {
            response.render('consultar_visitantes', {
                visitantes : rows,
                isLoggedIn : request.session.isLoggedIn || false,
                username : request.session.username || '',
                info: mensaje,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};