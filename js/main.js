//FUNCIONES

function cargarProductos(productosElegidos) {
    
    contenedorProductos.innerHTML = ""
    
    productosElegidos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `    
        <img class="producto-imagen" src= "${producto.img}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo"> ${producto.titulo} </h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id= "${producto.id}" >Agregar</button>
        </div>
    `
        contenedorProductos.append(div)
    })

    actualizarBotonesAgregar ()

}

function actualizarBotonesAgregar () {

    botonesAgregar = document.querySelectorAll(".producto-agregar") 

    botonesAgregar.forEach (boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id
    productoAgregado = productos.find(producto => producto.id === idBoton)

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex (producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    }
    else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }

    actualizarNumerito ()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))

    // LIBRERIA

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          borderRadius: "2rem "
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

function actualizarNumerito () {
    let nuevoNumerito = productosEnCarrito.reduce ((acumulador , producto) => acumulador + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito
}

// API FETCH

let productos = []
fetch ("./js/productos.json")
.then(response => response.json())
.then(data => {
    productos = data
    cargarProductos(productos)

})


// DOM

const contenedorProductos = document.querySelector(".contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
let numerito = document.querySelector("#numerito")

// INICIO

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))

        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos") {

            const productoCategoria = productos.find (producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre
            const productoBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productoBoton)
        }

        else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }


    })
})

let productosEnCarrito

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito ()
}
else {
    productosEnCarrito = []
}