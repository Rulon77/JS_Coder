//Esto se ve por consola, una vez terminado el ciclo Wile.

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre}.`;
    }

    esMayorDeEdad() {
        return this.edad >= 18;
    }

    elGenero() {
        return `${this.nombre} Es del genero ${this.genero}.`;
    }
}

const p = new Persona("Ernesto", 20, "M");

console.log(p.saludar());
console.log(p.esMayorDeEdad());
console.log(p.elGenero());


const array = [1, 2, 3, 4, 5, 6, 7, 9, 10];

const elemento = array.find(elementoArray => elementoArray > 5);
console.log(elemento);


const productos =[
    { id: 1, nombre: 'Molde Integral', precio: 1500, categoria: 'Panificado'},
    { id: 2, nombre: 'Baguet', precio: 1000, categoria: 'Panificado' },
    { id: 3, nombre: 'Rustico', precio: 1000, categoria: 'Panificado' },
    { id: 4, nombre: 'Medialunas', precio: 700, categoria: 'Facturas' },
    { id: 5, nombre: 'Pasteleras', precio: 700, categoria: 'Facturas' },
    { id: 6, nombre: 'Hojaldre', precio: 700, categoria: 'Facturas' },
    { id: 7, nombre: 'Pasta Frola', precio: 1500, categoria: 'Pasteleria' },
    { id: 8, nombre: 'Pepas', precio: 1300, categoria: 'Pasteleria' },
    { id: 9, nombre: 'Lemon Pie', precio: 1300, categoria: 'Pasteleria' },
];

const filteredProducts = productos.filter(producto => producto.categoria === "Pasteleria"); //Aca se puede elegir categoria a buscar de la lista de productos.
console.log(filteredProducts);


//Esto se ve por Alert. Una vez que se elige (opcion 3, terminar) corre lo que se ve por consola

let compras = [];

function mostrarMenu() {
    return parseInt(prompt("Ingrese lo que quiere hacer: \n 1. Comprar \n 2. Ver Categorias \n 3. Terminar"));
}

function formatearProducto(producto) {
    return `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}, Categoria: ${producto.categoria}`;
}

function mostrarProductos(productos) {
    return productos.map(formatearProducto).join('\n');
}

function calcularTotal(compras) {
    return compras.reduce((total, producto) => total + producto.precio, 0);
}

function comprarProducto() {
    alert("Elija el producto a comprar:\n" + mostrarProductos(productos));
    const id = parseInt(prompt("Ingrese la clave del producto"));
    const compra = productos.find(prod => prod.id === id);
    if (compra) {
        compras.push(compra);
        const decision = parseInt(prompt("¿Quiere seguir comprando? \n 1. Sí \n 2. No"));
        if (decision === 1) {
            comprarProducto();
        } else {
            const total = calcularTotal(compras);
            alert("Su compra: \n" + mostrarProductos(compras) + `\n Total a pagar: $ ${total}`);
        }
    } else {
        alert("Producto no encontrado.");
    }
}

function verCategorias() {
    const categorias = [...new Set(productos.map(prod => prod.categoria))];
    alert("Categorías disponibles:\n" + categorias.join(", "));
    const categoriaSeleccionada = prompt("Ingrese la categoría deseada").toLowerCase();
    const productosFiltrados = productos.filter(prod => prod.categoria.toLowerCase() === categoriaSeleccionada);
    if (productosFiltrados.length > 0) {
        alert("Productos en la categoría seleccionada:\n" + mostrarProductos(productosFiltrados));
        const decisioncat = parseInt(prompt("¿Quiere ver más categorías? \n 1. Sí \n 2. No"));
        if (decisioncat === 1) {
            verCategorias();
        }
    } else {
        alert("No hay productos en la categoría seleccionada, ingrese una categoria correcta.");
    }
}

while (true) {
    const eleccion = mostrarMenu();
    switch (eleccion) {
        case 1:
            comprarProducto();
            break;
        case 2:
            verCategorias();
            break;
        case 3:
            alert("Gracias visitar El Arrobo.");
            break;
        default:
            alert("Opción no válida. Intente de nuevo.");
    }
    if (eleccion === 3) break;
}