// FUNCIONES

function saludarUsuario() {
    const nombre = prompt("Ingrese su nombre")
    alert("Bienvenido " + nombre + " al sitio de compras de productos")
    return nombre
}

function mostrarProductosDisponibles(productos) {
    let mensaje = ""
    productos.forEach(producto => {
        mensaje += producto.Producto + " - $" + producto.Precio + "\n"
    })
    alert("Productos disponibles para comprar:\n" + mensaje)
}

function seleccionarProducto() {
    let productoBuscado = prompt("Producto a buscar (Escribe 'Fin' para terminar la selección)")
    
    while (productoBuscado.toLowerCase() !== "fin") {
        const productoEncontrado = listaProductos.find((el) => el.Producto.toLowerCase() === productoBuscado.toLowerCase())

        if (productoEncontrado) {
            const cantidad = parseInt(prompt("Cantidad de producto"))
            agregarAlCarrito(productoEncontrado, cantidad)
        } else {
            alert("Producto no encontrado")
            mostrarProductosDisponibles(listaProductos); // Mostrar nuevamente los productos disponibles
        }

        productoBuscado = prompt("Producto a buscar (Escribe 'Fin' para terminar la selección)")
    }
}

function agregarAlCarrito(producto, cantidad) {
    const productoModificado = {
        Producto: producto.Producto,
        Precio: producto.Precio * cantidad
    }
    carrito.push(productoModificado)
    alert("Producto agregado al carrito")
}

function aplicarDescuento() {
    alert("Descuento del 15% a productos que superen los $5000")

    const productosConDescuento = carrito.filter((el) => el.Precio > 5000)
    productosConDescuento.forEach((el) => {
        el.Precio *= 0.85; // Aplica el 15% de descuento
    })

    console.log("Productos con descuento aplicado:", productosConDescuento)
    console.log("Carrito actualizado:", carrito)
}

function calcularTotal() {
    const total = carrito.reduce((acumulador, actual) => acumulador + actual.Precio, 0)
    return total
}

// ARRAY LISTA PRODUCTOS

const listaProductos = [
    { Producto: "Arroz", Precio: 1500 },
    { Producto: "Leche", Precio: 1500 },
    { Producto: "Fideos", Precio: 1500 },
    { Producto: "Agua", Precio: 1500 },
    { Producto: "Harina", Precio: 1500 },
    { Producto: "Chocolate", Precio: 1500 },
    { Producto: "Hamburguesa", Precio: 1500 },
    { Producto: "Salchicha", Precio: 1500 },
    { Producto: "Gaseosa", Precio: 1500 },
    { Producto: "Jamon", Precio: 1500 }
]

const carrito = []


// INICIO DEL PROGRAMA

const nombrePersona = saludarUsuario()
mostrarProductosDisponibles(listaProductos)
seleccionarProducto()
aplicarDescuento()
const totalCompra = calcularTotal()

console.log ("Total Compra: " + totalCompra)
alert("El total de su compra es de: $" + totalCompra + "\nMuchas gracias " + nombrePersona + " por tu compra")










