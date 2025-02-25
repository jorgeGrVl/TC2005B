const express = require('express');
const router = express.Router();
module.exports = router;

const html_lab5 = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi Página Personal - Jorge Armando Garzón Varela</title>
        <link rel="stylesheet" href="styles.css">
        <!-- Foundation CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites/dist/css/foundation.min.css">
    </head>
    <body>
        <header class="grid-x grid-padding-x align-center-middle text-center">
            <h1 class="cell">Jorge Armando Garzón Varela</h1>
            <nav class="cell">
                <ul class="menu align-center">
                    <li><a href="#sobre-mi">Sobre Mí</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#material-design">Material Design</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>

        <main class="grid-container">
            <section id="sobre-mi" class="grid-x grid-padding-x">
                <div class="cell medium-8 medium-offset-2">
                    <h2>Sobre Mí</h2>
                    <p>Hola, mi nombre es Jorge Garzón. Soy un estudiante de ITC en el Tecnológico de Monterrey y me encanta trabajar en proyectos innovadores...</p>
                </div>
            </section>

            <section id="proyectos" class="grid-x grid-padding-x">
                <div class="cell medium-8 medium-offset-2">
                    <h2>Proyectos</h2>
                    <article class="callout">
                        <h3>Simulación computacional de la dielectroforesis</h3>
                        <p><strong>Descripción:</strong> El proyecto consistió en investigar la malaria y los métodos para su detección...</p>
                    </article>
                    <article class="callout">
                        <h3>Odisea de los Héroes</h3>
                        <p><strong>Descripción:</strong> Desarrollo de un juego de rol (RPG) en C++...</p>
                    </article>
                    <article class="callout">
                        <h3>Análisis de Datos en la Premier League</h3>
                        <p><strong>Descripción:</strong> El proyecto consistió en analizar datos de las últimas 10 temporadas...</p>
                    </article>
                </div>
            </section>

            <section id="material-design" class="grid-x grid-padding-x">
                <div class="cell medium-8 medium-offset-2">
                    <h2>Material Design</h2>
                    <p>Material Design es un sistema de diseño creado por Google con el objetivo de proporcionar una experiencia de usuario coherente en todas las plataformas y dispositivos. Inspirado en el mundo físico y su textura, utiliza conceptos de luz, sombra y movimiento para crear una interfaz intuitiva y realista.</p>
                    <p>Algunas características clave de Material Design incluyen:</p>
                    <ul>
                        <li><strong>Profundidad y sombras:</strong> Utiliza sombras para indicar jerarquía y enfoque en los elementos de la interfaz.</li>
                        <li><strong>Animaciones suaves:</strong> Las transiciones y animaciones ayudan a guiar al usuario sin interrupciones.</li>
                        <li><strong>Colores vibrantes:</strong> Una paleta de colores llamativa para captar la atención y facilitar la navegación.</li>
                    </ul>
                    <p>Para obtener más información, puedes visitar el sitio oficial de <a href="https://material.io/" target="_blank">Material Design</a>.</p>
                </div>
            </section>

            <section id="contacto" class="grid-x grid-padding-x">
                <div class="cell medium-8 medium-offset-2">
                    <h2>Contacto</h2>
                    <p><strong> Nombre:</strong> Jorge Armando Garzón Varela</p>
                    <p><strong> Matrícula:</strong> A01707102</p>
                    <p><strong> Correo:</strong> A01707102@tec.mx</p>
                    <h3>Envíame un mensaje:</h3>
                    <form action="#" method="post">
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" class="input-group-field" required>
                        <label for="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" class="input-group-field" required>
                        <label for="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" class="input-group-field" required></textarea>
                        <button type="submit" class="button">Enviar</button>
                    </form>
                </div>
            </section>
        </main>

        <footer class="grid-x grid-padding-x align-center-middle text-center">
            <p class="cell">Editor utilizado: <strong>VS Code</strong></p>
            <p class="cell">Enlace: <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a></p>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/foundation-sites/dist/js/foundation.min.js"></script>
        <script>
            $(document).ready(function() {
                $(document).foundation();
            });
        </script>
    </body>
    </html>
`

const html_lab6 = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Taquería Online</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header class="bg-danger text-white p-3 mb-4">
            <div class="container">
                <h1 class="text-center">Taquería Online</h1>
                <nav>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#productos">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#preguntas">Preguntas</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <main class="container">
            <section id="productos" class="mb-5">
                <h2 class="text-center mb-4">Productos</h2>
                <div class="row g-4">

                    <div class="col-md-4">
                        <div class="card h-100 text-center producto" data-precio="10">
                            <img src="https://static.vecteezy.com/system/resources/previews/048/928/341/non_2x/tacos-de-carnitas-isolated-on-transparent-background-free-png.png" class="card-img-top producto-img" alt="Tacos">
                            <div class="card-body">
                                <h3 class="card-title">Tacos</h3>
                                <p class="precio">$10.00</p>
                                <div class="cantidad d-flex justify-content-center align-items-center">
                                    <button class="btn btn-outline-danger me-2 restar">-</button>
                                    <span class="mx-2 cantidad-valor">0</span>
                                    <button class="btn btn-outline-success ms-2 sumar">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card h-100 text-center producto" data-precio="15">
                            <img src="https://static.vecteezy.com/system/resources/previews/040/193/580/non_2x/ai-generated-quesadilla-clip-art-free-png.png" class="card-img-top producto-img" alt="Quesadilla">
                            <div class="card-body">
                                <h3 class="card-title">Quesadillas</h3>
                                <p class="precio">$15.00</p>
                                <div class="cantidad d-flex justify-content-center align-items-center">
                                    <button class="btn btn-outline-danger me-2 restar">-</button>
                                    <span class="mx-2 cantidad-valor">0</span>
                                    <button class="btn btn-outline-success ms-2 sumar">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card h-100 text-center producto" data-precio="20">
                            <img src="https://indumesa.com/movil/img/internos/especialidades/bebidas/img_aguas.png" class="card-img-top producto-img" alt="Aguas de Sabor">
                            <div class="card-body">
                                <h3 class="card-title">Aguas de Sabor</h3>
                                <p class="precio">$20.00</p>
                                <div class="cantidad d-flex justify-content-center align-items-center">
                                    <button class="btn btn-outline-danger me-2 restar">-</button>
                                    <span class="mx-2 cantidad-valor">0</span>
                                    <button class="btn btn-outline-success ms-2 sumar">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 text-center">
                    <h3>Total: $<span id="total">0.00</span></h3>
                    <button class="btn btn-success mt-2" id="pagar">Pagar Orden</button>
                </div>
            </section>

            <section id="preguntas" class="preguntas-section">
                <h2 class="text-center mb-4">Preguntas</h2>
                <article class="pregunta mb-3">
                    <h3>¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</h3>
                    <p>Validar inputs con JavaScript es una buena práctica porque mejora la experiencia del usuario al proporcionar retroalimentación inmediata y reduce la carga en el servidor al evitar solicitudes innecesarias con datos incorrectos.</p>
                </article>
                <article class="pregunta mb-3">
                    <h3>¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?</h3>
                    <p>Se puede saltar la seguridad de JavaScript porque la validación ocurre en el lado del cliente, donde los usuarios pueden modificar el código, deshabilitar JavaScript o enviar datos manualmente mediante herramientas como Postman o la consola del navegador.</p>
                </article>
                <article class="pregunta">
                    <h3>Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</h3>
                    <p>Aun así, es una buena práctica porque mejora la usabilidad y eficiencia del sistema. Sin embargo, no sustituye la validación en el servidor, que es la capa de seguridad final e imprescindible.</p>
                </article>
            </section>        
        </main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="script.js"></script>
    </body>
    </html>
`

router.get('/lab5', (request, response, next) => {
    response.send(html_lab5);
});

router.get('/lab6', (request, response, next) => {
    response.send(html_lab6);
});