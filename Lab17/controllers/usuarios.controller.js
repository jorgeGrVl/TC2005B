exports.get_login = (request, response, next) => {
    response.render('login', {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    });  
};

exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    request.session.isLoggedIn = true;
    response.redirect('/visitantes/consultar');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/usuarios/login')
    });
};