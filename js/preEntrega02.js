// ARRAYS - OBJETOS - METODOS DE ORDEN SUPERIOR

// AL MENOS UN METODO DE BUSQUEDA Y FILTRADO
// AL MENOS UN ARRAY - ok
// AL MENOS UN OBJETO - ok
// AL MENOS UN CICLO



const listaProductos = [
    { Producto: "Arroz", Precio: 1500, },
    { Producto: "Leche", Precio: 1500, },
    { Producto: "Fideos", Precio: 1500, },
    { Producto: "Agua", Precio: 1500, },
    { Producto: "Harina", Precio: 1500, },
    { Producto: "Chocolate", Precio: 1500, },
    { Producto: "Hamburguesa", Precio: 1500, },
    { Producto: "Salchicha", Precio: 1500, },
    { Producto: "Gaseosa", Precio: 1500, },
    { Producto: "Jamon", Precio: 1500, }
];

const carrito = [];

// PROGRAMA

// PEDIDO NOMBRE

const nombrePersona = prompt("Ingrese su nombre")

alert("Bienvenido " + nombrePersona + " al sitio de compras de productos")


let mensaje = "" // VARIABLE PARA ALMACENAR PRODUCTOS DISPONIBLES

// FUNCION PARA RECORRER LA LISTA DE PRODUCTOS
listaProductos.forEach(producto => {
    mensaje += producto.Producto + " - $" + producto.Precio + "\n"
})

// SE MUESTRA LISTADO DE PRODUCTOS DISPONIBLES
alert("Productos disponibles para comprar:\n" + mensaje);

// BUSQUEDA DE PRODUCTO
let buscarProducto = prompt("Producto a buscar (Escribe 'Fin' para terminar la selección de este tipo)");

// CICLO DE SELECCIÓN DEL PRODUCTO
while (buscarProducto.toLowerCase() != "fin") {

    // PRODUCTO EXISTE EN LISTA 
    const resultadoProducto = listaProductos.find((el) => el.Producto.toLowerCase() === buscarProducto.toLowerCase());

    if (resultadoProducto) {
        const cantidadProducto = parseInt(prompt("Cantidad de producto"));
        const productoConPrecioModificado = {
            Producto: resultadoProducto.Producto,
            Precio: resultadoProducto.Precio * cantidadProducto,
        };

        // AGREGO AL CARRITO
        carrito.push(productoConPrecioModificado);
        alert("Producto agregado al carrito")

    } else {
        alert("Producto no encontrado \nProductos disponibles para comprar: \n" + mensaje);
    }

    buscarProducto = prompt("Producto a buscar (Escribe 'Fin' para terminar la selección de este tipo)");
}

alert("Descuento del 15% a productos que superen los $5000");

// Filtrar productos que superen los $5000
const productosConDescuento = carrito.filter((el) => el.Precio > 5000);

// Aplicar descuento del 15% a los productos filtrados
productosConDescuento.forEach((el) => {
    el.Precio = el.Precio * 0.85; // Aplica el 15% de descuento
});


console.log("Productos con descuento aplicado:", productosConDescuento);
console.log("Carrito actualizado:", carrito);

const totalCompra = carrito.reduce((acumulador, actual) => {
    return acumulador += actual.Precio
}, 0)

alert("El total de su compra es de: $" + totalCompra + "\n" + "Muchas gracias " + nombrePersona + " por tu compra")










