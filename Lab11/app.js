const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

app.use('/main', (request, response, next) => {
    response.send("Hola desde la ruta principal");
});

const rutasVisitantes = require('./routes/visitantes.routes');
app.use('/visitantes', rutasVisitantes);

const rutasLaboratorios = require('./routes/laboratorios.routes');
app.use('/laboratorios', rutasLaboratorios);

app.use((request, response, next) => {
    response.status(404).send('Página No Encontrada')
});

app.listen(3000);