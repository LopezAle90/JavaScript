/*
1) Escribir un programa en donde el usuario ingrese números, esos números se
carguen en un array. Luego recorrer el array y determinar cuál es el mayor, el menor
y la media.

*/

/*
function mayorMenorMedia() {
    numero = parseInt(prompt("Ingrese un numero, presione '0' para salir")) //5
    while (numero != 0) {
        arrayNumero.push(numero)
        numero = parseInt(prompt("Ingrese un numero, presione '0' para salir"))
    }

    mayor = arrayNumero[0]
    menor = arrayNumero[0]


    for (const recorrido of arrayNumero) {
        if (recorrido > mayor) {
            mayor = recorrido
        }
        else if (recorrido < menor) {
            menor = recorrido
        }

        resultado += recorrido


    }
}

const arrayNumero = []

let numero = 0
let resultado = 0
let mayor = 0
let menor = 0

mayorMenorMedia()

console.log("Numeros ingresados " + arrayNumero)
console.log("Numero mayor " + mayor)
console.log("Numero menor " + menor)
console.log("Media " + resultado / arrayNumero.length)
*/

/*
2) Escribir un programa en donde el usuario ingrese no más de 10 números, luego
calcular la media de los números ingresados
*/

/*
function media() {

    let i = 0
    while (i < 10) {
        numero = parseInt(prompt("Ingrese un numero"))
        arrayNumero.push(numero)
        i++
    }

    for (const recorrido of arrayNumero) {
        resultado += recorrido
    }

    return resultado / arrayNumero.length
}

const arrayNumero = []

let numero = 0
let resultado = 0

const mediaCalculada = media()

console.log("Numeros ingresados " + arrayNumero)
console.log("Media " + mediaCalculada)
*/

/*
3) Dados los siguientes arrays
a) [1, 3, 5, 6, 7, 9]
b) [1, 2, 3, 4, 7, 8]
Generar un nuevo array con la intersección de los elementos
*/

/*
const array1 = [1, 3, 5, 6, 7, 9]
const array2 = [1, 2, 3, 4, 7, 8]

const nuevoArray = array1.concat(array2)

console.log (nuevoArray)

*/

/*

4) Ídem ejercicio anterior pero en vez de la intersección, generar un nuevo array con la
unión de los elementos (Sin repetirlos).

*/

/*
const array1 = [1, 3, 5, 6, 7, 9]
const array2 = [1, 2, 3, 4, 7, 8]

//Uno los arrays con CONCAT
const union = array1.concat(array2);

// Creo un nuevo array para almacenar los elementos únicos
const unionSinDuplicados = [];

// Uso for-of para recorrer el array unido con CONCAT

for (const item of union) {
    // Verifica si el elemento ya está en el nuevo array
    let yaEsta = false;
    for (const elemento of unionSinDuplicados) {
        if (elemento == item) {
            yaEsta = true;
            break;
        }
    }
    // Si el elemento no está en el nuevo array
    if (!yaEsta) {
        unionSinDuplicados.push(item);
    }
}

console.log(unionSinDuplicados)

*/

/*
5) Solicitarle al usuario un número N. Luego, generar un array de N cantidad de
elementos, donde los elementos tienen que ser múltiplos de N.
Nota: N tiene que ser mayor a 0 y menor a 100
*/

/*
let N = parseInt(prompt("Ingrese un numero (del 1 al 100) y se devolverá un array con una cantidad de multiplos determinada por el numero que haya seleccionado"))

while (N <= 0 || N >= 100) {
    N = parseInt(prompt("El numero debe ser entre 1 y 100, INTENTA DE NUEVO"))
}


const multiplos = []

for (let i = 1 ; i <= N ; i++) {
    multiplos.push(N*i)
}

console.log (multiplos)
console.log (multiplos.length)
*/

/*
6) Escriba una función que sume todos los elementos de un array de números. Ej: Si se
le da el array [3, 5, 8, 1] tiene que devolver 17.
*/

/*
const arrayDeNumeros = [1, 2, 3]

function suma () {

    let total = 0
    
    for (numero of arrayDeNumeros) {
        total += numero
    }

    return total
}

console.log (suma(arrayDeNumeros))

*/

/*
7) Escriba una función que tome un array de números y devuelva un nuevo array solo
con los números pares. Ej: Si se le da el array [1, 3, 4, 6, 8, 9] tiene que devolver el
array [4, 6, 8]
*/

/*
function esPar (array) {

    let numero = 0

    for (numero of arrayDeNumeros) {
        dividir = numero % 2

        if (dividir == 0) {

            numerosPares.push(numero)
        }
    }
}

const arrayDeNumeros = [1,2,3,4,5,6,7,8,9]

const numerosPares = []


esPar (arrayDeNumeros)

console.log (numerosPares)

*/

/*
8) Dado el siguiente array:
a) [2, 7, 6, 8, 3, 2, 3, 4, 7, 5, 6]
Generar un nuevo array en dónde se eliminen los elementos repetidos, por lo
que el resultado sería: [2, 7, 6, 8, 3, 4, 5]
*/

/*
const arrayDeNumeros = [2, 7, 6, 8, 3, 2, 3, 4, 7, 5, 6]

const nuevoArray = []

for (const numero of arrayDeNumeros) {

    let estaRepetido = false

    for (const el of nuevoArray) {
        if (numero == el) {
            estaRepetido = true
            break
        }
        
    }

    if (!estaRepetido) {
        nuevoArray.push(numero)
    }

}

console.log(nuevoArray)

*/

/*
9) Escriba una función que tome un array de números y un número, y devuelva un
nuevo array donde cada elemento se multiplica por ese número. Ej: Se le da el array
[2, 4, 5, 6] y se envía el número 3, por lo que el array resultante tiene que ser: [6, 12,
15, 18]
*/

/*

function multiplicar() {

    let numeroPedido = parseInt(prompt("Escriba cualquier numero que no sea '0'"))

    while (numeroPedido != 0) {
        arrayDeNumeros.push(numeroPedido)
        numeroPedido = parseInt(prompt("Escriba otro numero o presione '0' para finalizar"))
    }

    const multiplicador = parseInt(prompt("Escriba el numero multiplicador"))

    for (const el of arrayDeNumeros) {
        arrayDeNumerosMultiplicados.push(el * multiplicador)
    }

}

const arrayDeNumeros = []
const arrayDeNumerosMultiplicados = []

multiplicar()

console.log(arrayDeNumeros)

console.log(arrayDeNumerosMultiplicados)

*/



