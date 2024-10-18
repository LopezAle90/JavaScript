const productos = [
    //Electrodomesticos
    {
        id: "electrodomestico-01",
        titulo: "Electrodomestico 01",
        img: "./assets/electrodomesticos/img01.jpg",
        categoria: {
            nombre: "Electrodomesticos",
            id: "electrodomesticos"
        },
        precio: 3500
    },

    {
        id: "electrodomestico-02",
        titulo: "Electrodomestico 02",
        img: "./assets/electrodomesticos/img02.jpg",
        categoria: {
            nombre: "Electrodomesticos",
            id: "electrodomesticos"
        },
        precio: 3500
    },

    {
        id: "electrodomestico-03",
        titulo: "Electrodomestico 03",
        img: "./assets/electrodomesticos/img03.jpg",
        categoria: {
            nombre: "Electrodomesticos",
            id: "electrodomesticos"
        },
        precio: 3500
    },

    {
        id: "electrodomestico-04",
        titulo: "Electrodomestico 04",
        img: "./assets/electrodomesticos/img04.jpg",
        categoria: {
            nombre: "Electrodomesticos",
            id: "electrodomesticos"
        },
        precio: 3500
    },

    //Bazar

    {
        id: "bazar-01",
        titulo: "Bazar 01",
        img: "./assets/bazar/img01.jpg",
        categoria: {
            nombre: "Bazar",
            id: "bazar"
        },
        precio: 3500
    },

    {
        id: "bazar-02",
        titulo: "Bazar 02",
        img: "./assets/bazar/img02.jpg",
        categoria: {
            nombre: "Bazar",
            id: "bazar"
        },
        precio: 3500
    },

    {
        id: "bazar-03",
        titulo: "Bazar 03",
        img: "./assets/bazar/img03.jpg",
        categoria: {
            nombre: "Bazar",
            id: "bazar"
        },
        precio: 3500
    },

    {
        id: "bazar-04",
        titulo: "Bazar 04",
        img: "./assets/bazar/img04.jpg",
        categoria: {
            nombre: "Bazar",
            id: "bazar"
        },
        precio: 3500
    },

    // Juguetes

    {
        id: "juguetes-01",
        titulo: "Juguetes 01",
        img: "./assets/juguetes/img01.jpg",
        categoria: {
            nombre: "Juguetes",
            id: "juguetes"
        },
        precio: 3500
    },

    {
        id: "juguetes-02",
        titulo: "Juguetes 02",
        img: "./assets/juguetes/img02.jpg",
        categoria: {
            nombre: "Juguetes",
            id: "juguetes"
        },
        precio: 3500
    },

    {
        id: "juguetes-03",
        titulo: "Juguetes 03",
        img: "./assets/juguetes/img03.jpg",
        categoria: {
            nombre: "Juguetes",
            id: "juguetes"
        },
        precio: 3500
    },

    {
        id: "juguetes-04",
        titulo: "Juguetes 04",
        img: "./assets/juguetes/img04.jpg",
        categoria: {
            nombre: "Juguetes",
            id: "juguetes"
        },
        precio: 3500
    }

]

// LLAMO DEL DOM

const contenedorProductos = document.querySelector(".contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
let numerito = document.querySelector("#numerito")


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

cargarProductos(productos)


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

function actualizarBotonesAgregar () {

    botonesAgregar = document.querySelectorAll(".producto-agregar") 

    botonesAgregar.forEach (boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let productosEnCarrito

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito ()
}
else {
    productosEnCarrito = []
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
}

function actualizarNumerito () {
    let nuevoNumerito = productosEnCarrito.reduce ((acumulador , producto) => acumulador + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito
}
















