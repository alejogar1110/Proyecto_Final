const productos = {
    p001: {
        nombre: 'Arroz',
        precio: 2500,
        descripcion: 'Arroz blanco Diana 1kg',
        img: 'img/arroz-diana.jpg'
    },
    p002: {
        nombre: 'Aceite',
        precio: 8000,
        descripcion: 'Aceite de girasol 900ml',
        img: 'img/aceite-girasol.jpg'
    },
    p003: {
        nombre: 'Azúcar',
        precio: 3700,
        descripcion: 'Azúcar blanca Riopaila 1kg',
        img: 'img/azucar-riopaila.jpg'
    },
    p004: {
        nombre: 'Leche',
        precio: 3500,
        descripcion: 'Leche entera Colanta 1L',
        img: 'img/leche-colanta.jpg'
    },
    p005: {
        nombre: 'Pan',
        precio: 3000,
        descripcion: 'Pan de molde Bimbo 400g',
        img: 'img/pan-bimbo.jpg'
    },
    p006: {
        nombre: 'Galletas',
        precio: 2500,
        descripcion: 'Galletas surtidas Noel 200g',
        img: 'img/galletas-noel.jpg'
    },
    p007: {
        nombre: 'Cereal',
        precio: 12000,
        descripcion: 'Cereal de maíz Kellogg\'s 500g',
        img: 'img/cereal-kelloggs.jpg'
    },
    p008: {
        nombre: 'Jugo',
        precio: 4000,
        descripcion: 'Jugo de naranja Hit 1L',
        img: 'img/jugo-hit.jpg'
    },
    p009: {
        nombre: 'Queso',
        precio: 8000,
        descripcion: 'Queso mozzarella Colanta 200g',
        img: 'img/queso-colanta.jpg'
    },
    p010: {
        nombre: 'Huevos',
        precio: 6500,
        descripcion: 'Huevos rojos tipo AA x 12 unidades',
        img: 'img/huevos.jpg'
    },
    p011: {
        nombre: 'Café',
        precio: 9800,
        descripcion: 'Café molido tradicional 250g',
        img: 'img/cafe aguila roja.jpg'
    },
    p012: {
        nombre: 'Pasta',
        precio: 3200,
        descripcion: 'Pasta espagueti 500g',
        img: 'img/spaguety doria.jpg'
    },
    p013: {
        nombre: 'Fríjol',
        precio: 4600,
        descripcion: 'Fríjol rojo cargamanto 500g',
        img: 'img/frijol maritza.jpg' 
    },
    p014: {
        nombre: 'Chocolate',
        precio: 5400,
        descripcion: 'Chocolate de mesa tradicional 250g',
        img: 'img/chocolate corona.jpg'
    },
    p015: {
        nombre: 'Detergente',
        precio: 11500,
        descripcion: 'Detergente líquido para ropa 1L',
        img: 'img/detergente.jpg'
    },
    p016: {
        nombre: 'Sal',
        precio: 1800,
        descripcion: 'Sal refinada de mesa 1kg',
        img: 'img/sal refisal.jpg'
    },
    p017: {
        nombre: 'Atún',
        precio: 5200,
        descripcion: 'Atún lomitos en agua 160g',
        img: 'img/atun.jpg'
    },
    p018: {
        nombre: 'Mantequilla',
        precio: 4900,
        descripcion: 'Esparcible de mantequilla 250g',
        img: 'img/mantequilla.jpg'
    },
    p019: {
        nombre: 'Jabón de baño',
        precio: 3100,
        descripcion: 'Jabón en barra cuidado diario 110g',
        img: 'img/jabon jhonson.jpg'
    },
    p020: {
        nombre: 'Papel higiénico',
        precio: 7500,
        descripcion: 'Papel higiénico doble hoja x 4 rollos',
        img: 'img/papel-higienico-scott.jpg'
    }
};

const contenedorProductos = document.getElementById("productos");

function crearTarjetas() {
    for (const registro in productos) {
        const claveProducto = productos[registro];

        const tarjeta = document.createElement('section');
        tarjeta.classList.add('tarjeta');

        const nombreProducto = document.createElement('h2');
        nombreProducto.textContent = claveProducto.nombre;
        nombreProducto.classList.add('nombre-producto');

        const precioProducto = document.createElement('p');
        precioProducto.textContent = claveProducto.precio;
        precioProducto.classList.add('precio-producto');

        const descripcionProducto = document.createElement('p');
        descripcionProducto.textContent = claveProducto.descripcion;
        descripcionProducto.classList.add('descripcion-producto');

        const imagenProducto = document.createElement('img');
        imagenProducto.src = claveProducto.img;
        imagenProducto.alt = claveProducto.nombre;
        imagenProducto.classList.add('imagen-producto');

        const botonProducto = document.createElement('button');
        botonProducto.textContent = 'Agregar al carrito';
        botonProducto.classList.add('boton-producto');

        tarjeta.append(
            nombreProducto,
            imagenProducto,
            precioProducto,
            descripcionProducto,
            botonProducto
        );

        contenedorProductos.appendChild(tarjeta);
    }
}

document.addEventListener('DOMContentLoaded', crearTarjetas);