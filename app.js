const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Este middleware se resgistra sólo en la ruta /ruta1
app.use('/ruta1', (request, response, next) => {
    response.send("Hola desde la ruta 1");
})

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);