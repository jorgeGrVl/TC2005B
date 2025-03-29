const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false,
    saveUninitialized: false,
}));

const multer = require('multer');
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        callback(null, new Date().getMilliseconds + file.originalname);
    },
});
app.use(multer({ storage: fileStorage }).single('archivo')); 

const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

const rutasVisitantes = require('./routes/visitantes.routes');
app.use('/visitantes', rutasVisitantes);

const rutasLaboratorios = require('./routes/laboratorios.routes');
app.use('/laboratorios', rutasLaboratorios);

app.use((request, response, next) => {
    response.status(404).send('Página No Encontrada')
});

app.listen(3000);