//1) Escriba un programa en donde el usuario ingrese 2 números e indique cuál es el mayor

/* //Le pido al usuario que ingrese dos numeros
const numero1 = parseInt(prompt("Ingrese el numero 01"))
const numero2 = parseInt(prompt("Ingrese el numero 02"))

// Comparar los números utilizando operadores lógicos
if (numero1 > numero2) {
   console.log ("El número " + numero1 + " es el mayor")
}

else if (numero1 < numero2) {
   console.log ("El número " + numero2 + " es el mayor")
}

else {
   console.log ("Ambos números son iguales")
} */


//2) El costo del helado es de $5. Escriba un programa en donde se le pida al usuario ingresar la cantidad de helados que quiere y mostrar cuánto le saldría
/*
//Le pido al usuario que ingrese la cantidad de helados que quiere
const cantidadHelados = parseInt(prompt("El helado cuesta $5, ingrese la cantidad de helados"))

// Operacion total precio de cantidad de helados
const precioHelados = cantidadHelados *5

//Muestro el resultado en la consola
console.log ("El precio total es de $" + precioHelados) */

// 3) Escriba un programa en donde se le solicite la edad al usuario y calcule su año de nacimiento, tomando en cuenta que el año actual es 2022.

//Le pido al usuario que escriba su edad
//const edadUsuario = parseInt(prompt("Escriba su edad"))

//Calculo su año de nacimiento
//const anioNacimiento = 2022-edadUsuario

//Muestro el resultado
//console.log ("Su año de nacimiento es " + anioNacimiento)

//4) Escriba un programa en donde el usuario ingrese 3 notas, calcule el promedio y si es mayor o igual a 4 le indique que está aprobado con un alert.

//Le pido al usuario que ingrese 3 notas
//const numero1 = parseInt(prompt("Ingrese la primer nota"))
//const numero2 = parseInt(prompt("Ingrese la segunda nota"))
//const numero3 = parseInt(prompt("Ingrese la tercer nota"))

//Calculo de promedio
//const promedio = (numero1+numero2+numero3)/3

//Condicional Aprobado/Desaprobado
//if (promedio >= 4) {
//    alert ("Su promedio es de " + promedio + " APROBADO")
//}

//else {
//  alert ("Su promedio es de " + promedio + " DESAPROBADO")
//}

// 5) Escriba un programa donde se le solicite el año de nacimiento. Si es mayor a 18 se le tiene que pedir que ingrese su nombre y apellido para mostrarle un texto con el formato: “Hola nombre apellido, tu edad actual es: edad”. Ejemplo: “Hola Rodrigo Río, tu edad actual es 25”.
//NOTA: Solo solicitar el nombre y apellido si es mayor a 18.

//Solicito año nacimiento
//const anioNacimiento = parseInt(prompt("Escriba su año de nacimiento"))
//
//if (2024 - anioNacimiento >= 18) {
//    const nombre = prompt("Ingrese su nombre")
//    const apellido = prompt("Ingrese su apellido")
//    const edad = 2024 - anioNacimiento
//
//    console.log ("Hola " + nombre + " " + apellido + " ,tu edad actual es " + edad)
//} 
//
//else {
//   console.log ("Su edad es menor a 18")
//}

// 6) Escriba un programa que permita calcular el costo total del producto con su IVA. Para esto, solicite al usuario el precio del producto, calcule su IVA (21%) y muéstrele en pantalla con un alert el precio final.

//Solicito precio de producto
//const precioProducto = parseInt (prompt("Ingrese el precio del producto"))

//Calculo resultado con IVA
//const precioProductoIva = precioProducto * 1.21

//Muestro resultado con ALERT
//alert ("El precio final es de " + precioProductoIva)

// 7) Escriba un programa en donde se le pida al usuario ingresar el lugar a donde quiera viajar.
// Teniendo en cuenta estos valores:
/*
- Colombia: $40 *
- México: $50 * 
- Brasil: $30 *
- Uruguay: $20 * 
- Chile: $20 *
- Ecuador: $30 *
- Perú: $40 * 
- Estados Unidos: $50

Mostrarle al usuario cuál sería el costo de viajar al lugar que escribió.
NOTA: Tener en cuenta las mayúsculas y minúsculas al momento de ingresar el
nombre del lugar */

//Pedido al usuario
/* const lugarParaViajar = prompt("Ingrese el lugar a donde quiera viajar: Colombia - México - Brasil - Uruguay - Chile - Ecuador - Perú - Estados Unidos")

if (
    (lugarParaViajar == "Colombia") ||
    (lugarParaViajar == "colombia")
) {
    console.log ("El valor para viajar a " + lugarParaViajar + " es de $40")
}

else if (
    (lugarParaViajar == "México") ||
    (lugarParaViajar == "Mexico") ||
    (lugarParaViajar == "mexico") ||
    (lugarParaViajar == "méxico")
) {
    console.log ("El valor para viajar a " + lugarParaViajar + " es de $50")
}

else if (
    (lugarParaViajar == "Brasil") ||
    (lugarParaViajar == "brasil")
) {
    console.log ("El valor para viajar a " + lugarParaViajar + " es de $30")
}

else if (
    (lugarParaViajar == "Uruguay") ||
    (lugarParaViajar == "uruguay")
) {
    console.log ("El valor para viajar a " + lugarParaViajar + " es de $20")
}

else if (
    (lugarParaViajar == "Chile") ||
    (lugarParaViajar == "chile")
) {
    console.log ("El valor para viajar a " + lugarParaViajar + " es de $20")
}

else if (
    (lugarParaViajar == "Ecuador") ||
    (lugarParaViajar == "ecuador")
) {
    console.log ("El valor para viajar a " + lugarParaViajar + " es de $30")
}

else if (
    (lugarParaViajar == "Perú") ||
    (lugarParaViajar == "perú") ||
    (lugarParaViajar == "Peru") ||
    (lugarParaViajar == "peru")

) {
    console.log ("El valor para viajar a " + lugarParaViajar + " es de $40")
}

else if (
    (lugarParaViajar == "Estados Unidos") ||
    (lugarParaViajar == "estados unidos") 

) {
    console.log ("El valor para viajar a " + lugarParaViajar + " es de $50")
}

else {
    console.log ("Usted escribió un lugar que no se encuentra disponible o escrito de manera incorrecta")
} */

//8) Escriba un programa en dónde se le solicite al usuario su nombre y edad, y según los siguientes casos muéstrele un mensaje de que tiene el acceso permitido:
/* 
    a) Si el nombre es “Pedro” o “pedro” y su edad es mayor de 18
    b) Si el nombre es “Juan”, “JUAN” o “juan” y su edad es mayor a 21
    c) Si el nombre es “paula” y su edad es mayor a 25 */
/*
const nombre = prompt("Ingrese su nombre")
const edad = parseInt(prompt("Ingrese su edad"))

//    a) Si el nombre es “Pedro” o “pedro” y su edad es mayor de 18
if (
    (nombre == "Pedro") ||
    (nombre == "pedro") &&
    (edad > 18)
) {
console.log ("Acceso Permitido")
}

//     b) Si el nombre es “Juan”, “JUAN” o “juan” y su edad es mayor a 21
else if (
    (nombre == "Juan") ||
    (nombre == "juan") ||
    (nombre == "JUAN") &&
    (edad > 21)
) {
    console.log ("Acceso Permitido")
}

//     c) Si el nombre es “paula” y su edad es mayor a 25

else if (
    (nombre == "paula") &&
    (edad > 25)
) {
    console.log ("Acceso Permitido")
}

else {
    console.log ("Acceso Denegado")
} */

//9) Escriba un programa en el cual se le pida el peso y altura al usuario, calcule su IMC y muestre si tiene bajo peso, peso normal, sobrepeso o es obeso.

/* const peso = parseInt (prompt("Ingrese su peso"))
const altura = parseFloat (prompt("Ingrese su altura"))

const IMC = peso / (altura * altura)

console.log (IMC)

if (IMC < 18.5) {
    console.log ("Usted tiene bajo peso")
}

else if (
    (IMC >= 18.5) &&
    (IMC <=24.9)
) {
    console.log ("Usted tiene peso normal")
}

else if (
    (IMC >= 25) &&
    (IMC <=29.9)
) {
    console.log ("Usted tiene Sobrepeso")
}

else if (IMC > 30) {
    console.log ("Usted tiene Obesidad")
}

else {
    console.log ("Realice nuevamente la consulta")
} */


//OPERADORES LOGICOS   (ORDEN DE SECUENCIA: 1° PARENTESIS 2° OPERADORES NOT Y LUEGO AND Y OR EN EL ORDEN CORRECTO)

//1) Siendo X, Y y Z valores booleanes cuyos valores son: X = true, Y = false y Z = true, determine el valor de cada expresión lógica:
/* 
a) (X && Y) || (X && Z)  = Or requiere que al menos una expresion sea verdadera, en este caso es TRUE
b) (X || !Y) && (!X || Z)  = And requiere que todas las expresiones sean verdaderas, en este caso es TRUE
c) X || Y && Z  = TRUE
d) !(X || Y) && Z =  FALSE
e) X (true) || Y (false) || X (true) && !Z (false) && !Y (true) = TRUE
f) !X || !Y || Z && X && !Y = FALSE or TRUE or Z (true) and X (true) and TRUE  = TRUE
*/


// 2) Escriba un programa que le pida una letra al usuario y le diga si es una vocal o no.

/* const letra = prompt("Escriba una letra")

if (
    (letra == "A") ||
    (letra == "E") ||
    (letra == "I") ||
    (letra == "O") ||
    (letra == "U") ||
    (letra == "a") ||
    (letra == "e") ||
    (letra == "i") ||
    (letra == "o") ||
    (letra == "u")
) {
    console.log ("La letra " + letra + " es una vocal")
}

else {
    console.log ("La letra " + letra + " no es una vocal")
} */

// 3) Escriba un programa en donde se le pida un nombre y una edad al usuario. Muestre un mensaje en pantalla si:
/* - El nombre es “Gabriel” y tiene más de 24 años
- El nombre es “María” y tiene entre 28 y 35 años */

/* const nombre = prompt ("Ingrese su nombre")
const edad = parseInt (prompt("Ingrese su edad"))

if (
    (nombre == "Gabriel") &&
    (edad > 24)
) {
    alert ("El nombre es Gabriel y tiene más de 24 años")
}

else if (
    (nombre == "Maria") &&
    (edad >= 28) &&
    (edad <= 35)
) {
    alert ("El nombre es María y tiene entre 28 y 35 años")
}

else {
    alert ("Nombre o Edad incorrectos")
} /*

// 4) Escriba un programa en donde se le solicite al usuario que ingrese 2 números y le muestre en pantalla un mensaje cuando su suma sea 10 y su división tenga como resto 0.

/* const numero1 = parseInt(prompt("Ingrese un numero"))
const numero2 = parseInt(prompt("Ingrese otro numero"))

const suma = numero1 + numero2
const division = numero1 % numero2

console.log (suma)
console.log (division)

if (
    (suma == 10) &&
    (division == 0)
) {
    alert ("El resultado de su suma es 10 y el resto de su division da 0")
}

else {
    alert ("El resultado de su suma NO es 10 o el resto de su division NO da 0")
} */


















