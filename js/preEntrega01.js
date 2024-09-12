/*
//FUNCIONES 
function saludar(nombre) {
    alert("Hola " + nombre + ", bienvenido al sitio para comprar productos");
}

function registrarProducto(nombreProducto, precio) {
    let cantidad = parseInt(prompt(nombreProducto + " - Precio U$$ " + precio + " - Registrar Cantidad"));
    let confirmacion = prompt("Registraste la cantidad de " + cantidad + " del producto " + nombreProducto + " - Escribe CONTINUAR para continuar o FINALIZAR para darte el total de tu compra");

    while (confirmacion !== "CONTINUAR" && confirmacion !== "FINALIZAR") {
        alert("Opción Incorrecta");
        confirmacion = prompt("Registraste la cantidad de " + cantidad + " del producto " + nombreProducto + " - Escribe CONTINUAR para continuar o FINALIZAR para darte el total de tu compra");
    }

    return { cantidad, confirmacion };
}

//INICIO DE PROGRAMA

const nombreDePersona = prompt("Ingrese un nombre"); 
saludar(nombreDePersona); 

const bienvenida = "Ahora serás dirigido a nuestro catálogo de productos"

const producto1 = registrarProducto("Cocina Marca Whirpool", 1000);
let total = producto1.cantidad * 1000;

if (producto1.confirmacion === "FINALIZAR") {
    console.log("El total de tu compra es de U$$ " + total);
} else if (producto1.confirmacion === "CONTINUAR") {
    const producto2 = registrarProducto("Heladera Marca Electrolux", 1300);
    total += producto2.cantidad * 1300;

    if (producto2.confirmacion === "FINALIZAR") {
        console.log("El total de tu compra es de U$$ " + total);
    } else if (producto2.confirmacion === "CONTINUAR") {
        let producto3 = parseInt(prompt("Microondas Marca Philips - Precio U$$ 500 - Registrar Cantidad"));
        total += producto3 * 500;
        alert("Registraste la cantidad de " + producto3 + " del producto Microondas Marca Philips - Ahora serás dirigido para ver el total de tu compra");
        
        console.log("El total de tu compra es de U$$ " + total);
    }
}

console.log("Proceso finalizado");

*/
