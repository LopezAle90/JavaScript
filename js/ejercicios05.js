/*
1) Crear una clase llamada Cancion que contenga los atributos: titulo y autor. Crear su
constructor y tiene que poseer los siguientes métodos:
a) mostrarTitulo() que muestre el título de la canción
b) mostrarAutor() que muestre el autor de la canción
*/


/*
class Cancion {
    constructor (titulo , autor) {
        this.titulo = titulo
        this.autor = autor
    }

    mostrarTitulo () {
        console.log ("El titulo de la cancion es " + this.titulo)
    }

    mostrarAutor () {
        console.log ("Su autor es " + this.autor)
    }
}

const cancion1 = new cancion ("Flores amarillas" , "Margarita")
const cancion2 = new cancion ("Rosas" , "La oreja de Van Gogh")

cancion1.mostrarTitulo()
cancion1.mostrarAutor()

cancion2.mostrarTitulo()
cancion2.mostrarAutor()

*/


/* 
2) Crear una clase llamada Persona que contenga los atributos: nombre, edad y DNI.
Crear su constructor y tiene que poseer 2 métodos:
a) mostrar() que muestre los datos de la persona
b) esMayor() que devuelva un valor booleano si es mayor de edad o no
*/


/*
class Persona {
    constructor (nombre , edad , dni) {
        this.nombre = nombre
        this.edad = edad
        this.dni = dni
    }

    mostrar() {
        console.log ("Tu nombres es " + this.nombre + ", tu edad es de " + this.edad + ", y tu DNI es " + this.dni)
    }

    esMayor() {
        if (this.edad >= 18) {
            return true
        }

        else {
            return false
        }
    }

}

const persona1 = new Persona ("Alejandro" , 15 , 35529311)
const persona2 = new Persona ("Noelia" , 34 , 35089765)

persona1.mostrar()
persona2.mostrar()

persona1.esMayor()
persona2.esMayor()

console.log (persona1.esMayor())
console.log (persona2.esMayor())

*/

/*
3) Crear una clase llamada Cuenta que contenga los siguientes atributos: titular (que
es una persona) y cantidad (que pueden ser decimales). Crear su constructor y tiene
que poseer los siguientes métodos:
a) mostrar() que muestra los datos de la cuenta
b) ingresar(cantidad) ingresa cantidad de dinero a la cuenta (Si la cantidad es
negativa no se hace nada)
c) retirar(cantidad) se retira una cantidad de la cuenta.
*/

/*
class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular
        this.cantidad = cantidad
    }

    mostrar() {
        console.log ("Titular: " + this.titular)
        console.log ("Cuenta: " + "$" + this.cantidad)

    }

    ingresar() {
        const ingreso = parseInt(prompt(this.titular + " Escriba cantidad de dinero a ingresar"))
        if (ingreso > 0) {
            alert ("Usted ingresó " + "$" + ingreso)
        }
    }

    retirar() {
        const retiro = parseInt(prompt(this.titular + " Escriba cantidad de dinero a retirar"))
        alert ("Usted retiró " + "$" + retiro)
    }
}

const persona1 = new Cuenta ("Alejandro Lopez" , 1500000)
const persona2 = new Cuenta ("Noelia Ramirez" , 549000)

persona1.mostrar()
persona2.mostrar()

persona1.ingresar()
persona2.ingresar()

persona1.retirar()
persona2.retirar()
*/

/*
4) Crear una clase llamada Calculadora que contenga los siguientes atributos:
numero1 y numero2. Crear su constructor y tiene que poseer los siguientes
métodos:
a) multiplicar() que multiplique los 2 números y devuelva su resultado
b) sumar() que sume los 2 números y devuelva su resultado
c) restar() que reste los 2 números y devuelva su resultado
d) dividir() que divida los 2 números y devuelva su resultado
*/

/*
class Calculadora {
    constructor(numero1 , numero2) {
        this.numero1 = numero1
        this.numero2 = numero2
    }

    multiplicar() {
        return this.numero1 * this.numero2
    }

    sumar() {
        return this.numero1 + this.numero2
    }

    restar() {
        return this.numero1 - this.numero2
    }

    dividir() {
        return this.numero1 / this.numero2
    }


}

const serie1 = new Calculadora (parseInt(prompt("Ingrese un numero")) , parseInt(prompt("Ingrese otro numero")))


const resultado1 = serie1.multiplicar()
console.log ("Si esos numeros se multiplicaran, su resultado sería " + resultado1)

const resultado2 = serie1.sumar()
console.log ("Si esos numeros se sumaran, su resultado sería " + resultado2)

const resultado3 = serie1.restar()
console.log ("Si esos numeros se restaran, su resultado sería " + resultado3)

const resultado4 = serie1.dividir()
console.log ("Si esos numeros se dividieran, su resultado sería " + resultado4)

*/

/*
5) Crear una clase llamada Libro que contenga los siguientes atributos: título, autor y
prestado (booleano). Crear su constructor y tiene que poseer los siguientes
métodos:
a) prestamo() que preste el libro (poner prestado en true). Si el libro se
encuentra prestado, debe mostrar un alert informándolo
b) devolver() que devuelva el libro (poner prestado en false). Si el libro no se
encuentra prestado, debe mostrar un alert informándolo.
*/

/*
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
        this.prestado = false
    }

    prestar() {
        if (this.prestado){
            alert("El libro se encuentra prestado")
        }
        else {
            alert("El libro se encuentra disponible para prestar")
            this.prestado = true
        } 
    }

    devolver() {
        if (!this.prestado) {
            alert ("El libro no se encuentra prestado")
        }

        else {
            alert("El libro ha sido devuelto")
            this.prestado = false
        }
    }
}

const libro1 = new Libro ("Alicia en el pais de las maravillas" , "Gabriel Garcia Marquez")
const libro2 = new Libro ("Interestelar" , "Christopher Nolan")

libro1.prestar()
libro1.prestar()

libro1.devolver()
libro1.devolver()
*/

/*
6) Crear una clase llamada Cafetera que contenga los atributos: cantidadMaxima
(Entero) y cantidadActual (Entero). Crear su constructor y tiene que poseer los
siguientes métodos:
a) servirTaza() la cual simula la acción de servir una taza. Tiene que descontar
en 1 la cantidadActual y validar que no se pueda servir una taza si no hay
cantidad suficiente.
b) vaciarCafetera() que ponga la cantidadActual en 0
c) agregarCafe(cantidad) que sume la cantidad de cafés indicados a la
cantidadActual. Validar que no pueda haber más capacidad que la
capacidadMaxima.
d) llenarCafetera() que ponga en la cantidadActual el valor de cantidadMaxima.
Validar que si la cafetera está llena ya, no la pueda llenar otra vez.
*/

/*
class Cafetera {
    constructor(cantidadMaxima , cantidadActual) {
        this.cantidadMaxima = cantidadMaxima
        this.cantidadActual = cantidadActual
    }

    servirTaza() {
        while (this.cantidadActual > 0) {
            this.cantidadActual --
            alert ("Se sirvio una taza - Disponibilidad " + this.cantidadActual)
        }
        
        alert ("No se puede servir una taza, no hay cantidad suficiente")
    }

    vaciarCafetera() {
        alert ("Iniciando el proceso de vaciar cafetera")
        this.cantidadActual = 0
        alert ("Cantidad actual " + this.cantidadActual)
    }

    agregarCafe() {
        this.cantidadAgregada = parseInt(prompt("Ingrese la cantidad de cafe a agregar"))
        if (this.cantidadActual + this.cantidadAgregada <= this.cantidadMaxima) {
            this.cantidadActual += this.cantidadAgregada
        }

        else {
            alert ("No puede haber mas capacidad que la capacidad maxima - Capacidad Actual: " + this.cantidadActual + " - Capacidad Maxima: " + this.cantidadMaxima)
        }
    }

    llenarCafetera() {
        alert ("Iniciando el proceso de llenado")
        if (this.cantidadActual == this.cantidadMaxima) {
            alert("No se inició el proceso de llenado - La cafetera ya se encuentra llena")
        }
        else {
            this.cantidadActual = this.cantidadMaxima
            alert ("Proceso de llenado a finalizado - Cantidad Actual: " + this.cantidadActual)
        }
    }
}

const cafetera1 = new Cafetera (10 , 5)

console.log (cafetera1)

//cafetera1.llenarCafetera()

//console.log (cafetera1)

//cafetera1.agregarCafe()
//console.log (cafetera1)
//cafetera1.agregarCafe()


// cafetera1.servirTaza()

// cafetera1.vaciarCafetera()

*/

/*
7) Crear un objeto Coche con las propiedades marca, modelo y año. Crea un método
acelerar() que aumente la velocidad del coche en 10 km/h y un método frenar() que
disminuya la velocidad del coche en 10 km/h.
*/

/*
class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.velocidad = 0
    }

    acelerar() {
        if (this.velocidad < 110) {

            this.velocidad = this.velocidad + 10
            alert("Auto acelerando a 10km/h - Velocidad actual " + this.velocidad + "km/h")
        }

        else {
            alert ("Velocidad maxima alcanzada")
        }

    }

    frenar() {

        if (this.velocidad > 0) {
            this.velocidad = this.velocidad - 10
            alert("Auto frenando a 10km/h - Velocidad actual " + this.velocidad + "km/h")
        }

        else {
            alert("Auto apagado")
        }
    }

}

const auto1 = new Coche("Ford", "Ka", 2018)

console.log(auto1.marca + " " + auto1.modelo + " " + auto1.año)
*/

/*
auto1.acelerar()
auto1.acelerar()
auto1.acelerar()
auto1.acelerar()
auto1.acelerar()
auto1.acelerar()
auto1.acelerar()
auto1.frenar()
auto1.frenar()
auto1.frenar()
auto1.frenar()
auto1.frenar()
auto1.frenar()
auto1.frenar()
*/

/*
8) Crear un objeto Producto con las propiedades nombre, precio y stock. Crea un
método vender() que reduce el stock del producto en 1 unidad.
*/

/*
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

    vender() {

        console.log ("Intentando vender producto " + this.nombre)

        this.ofrecimiento = (prompt("Producto: " + this.nombre + "\n" + "Precio: $ " + this.precio + "\n" + "Escriba SI para adquirir una unidad"));

        if (this.ofrecimiento == "SI") {
            this.stock = this.stock - 1
        }
        
        else {
            console.log ("El cliente no solicitó producto " + this.nombre)
        }

        console.log ("Producto vendido con exito")

        console.log ("Disponibles " + this.stock + " unidades")

    }

}

const producto1 = new Producto ("Pizza" , 5000 , 20)
const producto2 = new Producto ("Hamburguesa" , 3000 , 15)
const producto3 = new Producto ("Lomito" , 7000 , 30)

producto1.vender()
producto2.vender()
producto3.vender()
producto1.vender()
*/



