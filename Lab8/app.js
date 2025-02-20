const calcularPromedio = (arreglo) => {
    let suma = 0;
    for (let item of arreglo) {
        suma += item;
    }
    return suma / arreglo.length;
};

let arreglo = [1, 2, 3, 4, 5];;
console.log(calcularPromedio(arreglo));


const escribirEnArchivo = (str) => {
    const file_s = require('fs');
    file_s.writeFileSync('prueba.txt', str);
}

let str = 'Hola';
escribirEnArchivo(str);


const twoSum = (arreglo, target) => {
    let l = 0;
    let r = arreglo.length - 1;
    while (arreglo[l] + arreglo[r] != target) {
        if (l == r - 1) {
            l += 1;
            r = arreglo.length - 1;
        }
        else {
            r -= 1;
        }
    }
    return [l, r];
};

console.log(twoSum(arreglo, 8));


const http = require('http');

const html = `
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

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
    });

server.listen(3000);