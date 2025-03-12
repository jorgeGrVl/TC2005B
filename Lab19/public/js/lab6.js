document.addEventListener('DOMContentLoaded', () => {
    const botonesSumar = document.querySelectorAll('.sumar');
    const botonesRestar = document.querySelectorAll('.restar');
    const totalSpan = document.getElementById('total');
    const botonPagar = document.getElementById('pagar');

    // Función para actualizar el total
    const actualizarTotal = () => {
        let total = 0;
        const productos = document.querySelectorAll('.producto');
        productos.forEach(producto => {
            const precio = parseFloat(producto.dataset.precio);
            const cantidad = parseInt(producto.querySelector('.cantidad-valor').textContent);
            total += precio * cantidad;
        });
        totalSpan.textContent = total.toFixed(2);
    };

    // Función para reiniciar los contadores
    const reiniciarContadores = () => {
        document.querySelectorAll('.cantidad-valor').forEach(span => {
            span.textContent = '0';
        });
        actualizarTotal();
    };

    // Función para sumar o restar cantidad
    botonesSumar.forEach(boton => {
        boton.addEventListener('click', () => {
            const cantidadSpan = boton.parentNode.querySelector('.cantidad-valor');
            let cantidad = parseInt(cantidadSpan.textContent);
            cantidad++;
            cantidadSpan.textContent = cantidad;
            actualizarTotal();
        });
    });

    botonesRestar.forEach(boton => {
        boton.addEventListener('click', () => {
            const cantidadSpan = boton.parentNode.querySelector('.cantidad-valor');
            let cantidad = parseInt(cantidadSpan.textContent);
            cantidad = Math.max(0, cantidad - 1);
            cantidadSpan.textContent = cantidad;
            actualizarTotal();
        });
    });

    // Función para pagar la orden
    botonPagar.addEventListener('click', () => {
        const total = parseFloat(totalSpan.textContent);
        if (total > 0) {
            const orden = [];
            document.querySelectorAll('.producto').forEach(producto => {
                const nombre = producto.querySelector('.card-title').textContent;
                const cantidad = parseInt(producto.querySelector('.cantidad-valor').textContent);
                if (cantidad > 0) {
                    orden.push({ nombre, cantidad });
                }
            });
            localStorage.setItem('orden', JSON.stringify(orden));
            console.log('Orden guardada:', orden);
            alert('Orden guardada. Total: $' + total);
            reiniciarContadores();
        } else {
            alert('No has seleccionado ningún producto.');
        }
    });
});