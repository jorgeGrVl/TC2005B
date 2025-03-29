const Visitante = require('../models/visitantes.models');

exports.get_registrar = (request, response, next) => {
    response.render('registrar_visitante', {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
        csrfToken: request.csrfToken(),
    });
};

exports.post_registrar = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const visitante = new Visitante(request.body.nombre, request.file.filename);
    visitante.save()
        .then(() => {
            request.session.info = `Visitante ${visitante.nombre} registrado`;
            response.redirect('/visitantes/consultar');
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.get_buscar = (request, response, next) => {
    console.log(request.params.valor);
    Visitante.find(request.params.valor).then(([rows, fieldData]) => {
        response.status(200).json({visitantes: rows});
    }).catch((error) => {
        response.status(500).json({message: "Internal Server Error"});
    })
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
                privilegios : request.session.privilegios || [],
            });
        })
        .catch((error) => {
            console.log(error);
        });
};