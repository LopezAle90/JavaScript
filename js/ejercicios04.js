/*
1) Escribir una función que reciba un número y devuelva su cuadrado
*/

/*
function devolverCuadrado(numero) {
    return numero ** 2;  // Devuelve pero no muestra
}

// LLAMO
const numero = parseInt(prompt("Ingrese un número"));
const resultado = devolverCuadrado(numero);  // Guardamos el resultado que retorna (return) la función
console.log("El cuadrado del número " + numero + " es " + resultado);
*/

//2) Escribir la función esPar que reciba un número y devuelva true si es par y false si no lo es

/*
function esPar() {
    if (numero % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

// LLAMO
const numero = parseInt(prompt("Ingrese un número"));

esPar (numero)
const resultado = esPar(numero)
console.log  (resultado)
*/

//3) Escribir la función esMultiploDe4 en la que se reciba un número y devuelva true si es múltiplo y false si no lo es.

/*
function esMultiploDe4 () {
    if (numero % 4 == 0) {
        return true
    }
    else {
        return false
    }
}

// LLAMO
const numero = parseInt(prompt("Ingrese un número"));

esMultiploDe4 (numero)
const resultado = esMultiploDe4 (numero)
console.log  (resultado)

*/

//4) Escribir una función que reciba 2 números como parámetros y devuelva el resultado de su multiplicación

/*
function multiplicar (num1 , num2) {
    return num1 * num2
}


//LLAMO
const resultado = multiplicar (10 , 3)
console.log (resultado)
*/

// 5) Escribir una función que reciba 2 números como parámetros y devuelva el que es mayor

/*
function esMayor(num1, num2) {
    if (num1 > num2) {
        return "El numero mayor es " + num1
    }
    else {
        return "El numero mayor es " + num2
    }
}

//LLAMO
const resultado = esMayor (2, 3)
console.log (resultado)
*/

//6) Escribir una función que reciba 2 números como parámetros y devuelva:
/*
a) Si el primer número es mayor que el segundo, devuelva 1
b) Si el segundo número es mayor que el primero, devuelva -1
c) Si ambos números son iguales, devuelva un 0
*/

/*
function esMayorMenorIgual(num1, num2) {
    if (num1 > num2) {
        return 1
    }
    else if (num1 < num2) {
        return -1
    }
    else {
        return 0
    }
}

//LLAMO
const resultado = esMayorMenorIgual (3 , 3)
console.log (resultado)
*/

// 7) Escribir una función que reciba 4 números como parámetros y devuelva su promedio.

/*
function promedio (nota1, nota2, nota3, nota4) {
    const promedio = (nota1 + nota2 + nota3 + nota4) / 4 
    return promedio
}

//INICIO DEL PROGRAMA

nota1 = parseInt (prompt("Ingrese nota 1"))
nota2 = parseInt (prompt("Ingrese nota 2"))
nota3 = parseInt (prompt("Ingrese nota 3"))
nota4 = parseInt (prompt("Ingrese nota 4"))

const resultado = promedio (nota1, nota2, nota3, nota4)
console.log ("El promedio de las 4 notas es de " + resultado)
*/

//8) Escribir la función areaRectangulo(base, altura), la cual recibe los parámetros base y altura que son números y tiene que devolver su area.
// NOTA: La fórmula del área de un rectangulo es base * altura

/*
function areaRectangulo (base, altura) {
    const area = base * altura
    return area
}

// INICIO DEL PROGRAMA

base = parseInt (prompt("Ingrese la base del Rectangulo"))
altura = parseInt (prompt("Ingrese la altura del Rectangulo"))

const resultado = areaRectangulo (base , altura)
console.log ("El area del rectangulo es de " + resultado)
*/

// 9) Escribir una función que le pida al usuario cadenas de texto hasta que ingrese “Salir”. Al ingresar “Salir” la función tiene que mostrar en pantalla los textos concatenados

/*
function concat () {
    let cadenaDeTexto = ""

    while (palabras != "salir") {
        cadenaDeTexto += palabras + " "
        let palabras = prompt ("Ingrese una palabra o ingrese SALIR")
    }

    return cadenaDeTexto
}

//INICIO DEL PROGRAMA

let palabras = prompt ("Ingrese una palabra o ingrese SALIR")
const resultado = concat (palabras)
console.log (resultado)
*/


//10) Escribir una función que le pida al usuario un número entero entre 1 y 20 y devuelva el número que ingresó. Se necesita validar que el número sea entre 1 y 20, por lo que si el usuario ingresa un número erróneo se le tiene que volver a pedir hasta que ingrese un número correcto.

/*
function numeroIngresado () {
    
    while (numero > 20 || numero < 1) {
        alert ("El numero ingresado debe ser del 1 al 20")
        numero = parseInt(prompt("Ingrese un numero del 1 al 20"))
    }
    return numero
}

let numero = parseInt(prompt("Ingrese un numero del 1 al 20"))
const resultado = numeroIngresado (numero)
console.log (resultado)
*/

// 11) Escriba una función que dado un número n, devuelva su factorial. El factorial de un número n se calcula como n! = n * (n-1) * (n-2) * ... * 1.

/*
function factorial(numero) {
    let result = 1; // Inicializamos la variable result
    for (let i = numero; i > 1; i--) {
        result *= i;
    }
    return result;
}

let numero = parseInt(prompt("Ingrese un número")); // Pedimos el número
let resultado = factorial(numero); // Calculamos el factorial del número

console.log("El factorial del numero ingresado es " + resultado); // Imprimimos el resultado del factorial
*/






/*
12) Escriba una función que reciba un número como parámetro e imprima su tabla de
multiplicación desde 1 hasta 10.
13) Escriba una función que reciba un número y muestre todos los divisores que tiene.

*/