// FUNCIONES
function cargarProductosEnCarrito() {


    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled")
        contenedorCarritoProductos.classList.remove("disabled")
        contenedorCarritoAcciones.classList.remove("disabled")
        contenedorCarritoComprado.classList.add("disabled")

        contenedorCarritoProductos.innerHTML = ""

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div")
            div.classList.add("carrito-producto")
            div.innerHTML = `
            <img class="carrito-producto-img" src="${producto.img}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `

            contenedorCarritoProductos.append(div)
        });




    }

    else {

        contenedorCarritoVacio.classList.remove("disabled")
        contenedorCarritoProductos.classList.add("disabled")
        contenedorCarritoAcciones.classList.add("disabled")
        contenedorCarritoComprado.classList.add("disabled")

    }

    actualizarBotonesEliminar()
    actualizarTotal()

}

function actualizarBotonesEliminar() {

    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e) {

    const idBoton = e.currentTarget.id
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
    productosEnCarrito.splice(index, 1)
    cargarProductosEnCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))

    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ff0000, #ff4d4d)",
          borderRadius: "2rem "
        },
        onClick: function(){} // Callback after click
      }).showToast();



}

function vaciarCarrito() {

    productosEnCarrito.length = 0
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    cargarProductosEnCarrito()

}

function actualizarTotal() {

    const totalCalculado = productosEnCarrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0)

    total.innerText = `$${totalCalculado}`
}

function comprarCarrito() {

    productosEnCarrito.length = 0
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    
    contenedorCarritoVacio.classList.add("disabled")
    contenedorCarritoProductos.classList.add("disabled")
    contenedorCarritoAcciones.classList.add("disabled")
    contenedorCarritoComprado.classList.remove("disabled")


}

// DOM
const contenedorCarritoVacio = document.querySelector("#carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#contenedor-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")
const botonVaciar = document.querySelector(".carrito-acciones-vaciar")
const contenedorTotal = document.querySelector("#total")
const botonComprar = document.querySelector(".carrito-acciones-comprar")

//INICIO

let productosEnCarrito = localStorage.getItem("productos-en-carrito")
productosEnCarrito = JSON.parse(productosEnCarrito)

cargarProductosEnCarrito()

botonVaciar.addEventListener("click", vaciarCarrito)
botonComprar.addEventListener("click", comprarCarrito)
