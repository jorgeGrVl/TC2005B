const visitantes = [];

exports.get_registrar = (request, response, next) => {
    response.render('registrar_visitante')
};

exports.post_registrar = (request, response, next) => {
    console.log(request.body);
    visitantes.push(request.body.nombre);
    console.log(visitantes);
    response.redirect('/visitantes/consultar')
};

exports.get_lista = (request, response, next) => {
    response.render('consultar_visitantes', {
      visitantes: visitantes,
    });
};