const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

app.use('/chewy', (request, response, next) => {
    response.send("Hola desde la ruta /chewy");
});

const rutasVisitantes = require('./routes/visitantes.routes');
app.use('/visitantes', rutasVisitantes);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); 
});

app.listen(3000);