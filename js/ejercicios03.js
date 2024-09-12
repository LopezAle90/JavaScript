//1) Realizar un programa que le pida al usuario cadenas de texto hasta que ingrese “Salir”. Una vez que sale, mostrarle en un alert los textos ingresados separados por una coma (,).
/*

let unaPalabra = prompt ("Ingrese un texto o palabra o SALIR para finalizar")
let texto = ""

while (unaPalabra != "salir") {
    texto += unaPalabra + ", "
    unaPalabra = prompt ("Ingrese un texto o palabra o SALIR para finalizar")
}

alert (texto)

*/

//2) Realizar un programa donde se le pida al usuario ingresar un número positivo y luego mostrar en pantalla el conteo hacia atrás hasta llegar a 0.
// NOTA: Tener en cuenta validar que es un número positivo el que ingresó.

//Le pido al usuario un numero positivo

/*
const numero = parseInt(prompt("Ingrese un numero"))

if (numero >= 0) {
    for (let contadorDelNumero = numero; contadorDelNumero >= 0; contadorDelNumero--) {
        console.log (contadorDelNumero)
    }
    alert("Conteo regresivo terminado")

}
else {
    alert ("Ingrese un numero positivo")
}
*/

// 3) Pedirle al usuario que ingrese un número, realizar un conteo hacia atrás hasta llegar a 0 pero sólo mostrando los números que son pares.

/*
const numero = parseInt(prompt("Ingrese un numero"))

if (numero >= 0) {
    for (let i = numero; i >= 0; i--) {
        if (i % 2 == 0) {
            console.log (i)
        }
    }
    alert("Conteo finalizado")
}
*/

//4) Realizar un programa en donde se le pida al usuario 2 números y realice su multiplicación mediante sumas sucesivas (Ej.: El usuario ingresa los números 2 y 3, por lo cual la multiplicación sería: 2 + 2 + 2 O 3 + 3 y tendría que devolver 6.

/*
let numero1 = parseInt(prompt("Ingrese un numero"))
let numero2 = parseInt(prompt("Ingrese otro numero"))

let resultado = 0

for (let i=0; i < numero2; i++) {
    resultado = resultado + numero1
}

console.log ("El resultado de la multiplicacion es: " + resultado)

*/

// 5) Realizar un programa en donde se le pida al usuario 2 números y realice su división mediante restas sucesivas (Ej.: El usuario ingresa los números 6 y 3, por lo cual la división sería: 6 - 3 - 3 y tendría que devolver 2).

//6) Realice el problema anterior pero ahora muestre el resultado junto al resto de la división

/*
let numero1 = parseInt(prompt("Ingrese un numero"))  //6
let numero2 = parseInt(prompt("Ingrese otro numero"))  //3

let = resultado = 0

while (numero1 >= numero2) { // 1° vez mientras 6 sea mayor o igual a 3 // 2° vez mientras 3 sea mayor o igual a 3
    numero1 = numero1 - numero2; // 1° Vez 6 = 6 - 3  , numero1 pasa de 6 a 3 // 2° vez 3 = 3 - 3 , numero 1 pasa de 3 a 0
    resultado = resultado + 1;  // 1° Vez resultado pasa a valer 1  // 2° vez resultado pasa a valer 2
}

console.log ("El resultado es " + resultado)
console.log ("El resto es " + numero1)
*/

// 7) Realice un programa que dados dos números, muestre todos los números que están en medio de ambos. (Ej: Ingreso 2 y 6, me tiene que mostrar 3, 4 y 5).

/*
let numero1 = parseInt(prompt("Ingrese un numero"))  //2
let numero2 = parseInt(prompt("Ingrese otro numero"))  //6

let numeroMenor = numero1  //6
let numeroMayor = numero2  //2

if (numero2 > numero1) {
    for (let i= numero1 + 1 ; i < numero2; i++) {
        console.log (i)  //3 . 4 . 5
    }
}

else if (numero2 < numero1) {
    for (let i= numero2 + 1 ; i < numero1; i++) {
        console.log (i)
    }
}

else {
    console.log ("Ingrese otros numeros")
}

*/

//8) Genera y muestra los primeros N números de la secuencia de Fibonacci, donde N es un número ingresado por el usuario.

/*NOTA: En matemáticas, la sucesión de Fibonacci (a veces mal llamada serie de
Fibonacci) es la sucesión infinita de números naturales.
0,1,1,2,3,5,8,13,21,34,55,89,144,233,377… La sucesión comienza con los números
0 y 1, y a partir de estos, cada elemento es la suma de los dos anteriores.*/

/*
const N = parseInt(prompt("Ingrese un número del 1 al 10"));

let fibo1 = 0;
let fibo2 = 1;
let contador = 2;

console.log(fibo1); // Mostrar el primer número de la secuencia

if (N > 1) {
  console.log(fibo2); // Mostrar el segundo número si N > 1
}

//EJEMPLO UTILIZADO NUMERO 6

while (N > contador) { // ¿5 es mayor al valor del contador en ese momento?
  //SE APLICA ESTO EN EL EJEMPLO 
  let siguiente = fibo1 + fibo2;
  // 1° 0 + 1 = 1
  // 2° 1 + 1 = 2
  // 3° 1 + 2 = 3
  // 4° 2 + 3 = 5
  console.log(siguiente);
  // 1° CONSOLA MUESTRA EL RESULTADO DE 0 + 1 OSEA "1"
  // 2° CONSOLA MUESTRA EL RESULTADO DE 1 + 1 OSEA "2"
  // 3° CONSOLA MUESTRA EL RESULTADO DE 1 + 2 OSEA "3"
  // 4° CONSOLA MUESTRA EL RESULTADO DE 2 + 3 OSEA "5"

  // Actualizar los valores para la siguiente iteración
  fibo1 = fibo2;
  // 1° FIBO1 PASA A VALER "1"
  // 2° FIBO1 PASA A VALER "1"
  // 3° FIBO1 PASA A VALER "2"
  // 4° FIBO1 PASA A VALER "3"

  fibo2 = siguiente;
  // 1° FIBO2 PASA A VALER EL VALOR DE SIGUIENTE OSEA "1"
  // 2° FIBO2 PASA A VALER EL VALOR DE SIGUIENTE OSEA "2"
  // 3° FIBO2 PASA A VALER EL VALOR DE SIGUIENTE OSEA "3"
  // 4° FIBO2 PASA A VALER EL VALOR DE SIGUIENTE OSEA "5"

  // Incrementar el contador
  contador++;
  // 1° CONTADOR AHORA VALE 3 y vuelve el ciclo
  // 2° CONTADOR AHORA VALE 4 y vuelve el ciclo
  // 3° CONTADOR AHORA VALE 5 y vuelve el ciclo
  // 4° CONTADOR AHORA VALE 6 y vuelve el ciclo
}

*/

// 9) Realice un programa en donde se le solicite un número al usuario y le muestre en pantalla cuántos dígitos tiene. (Ej: Si ingreso 27, tiene que mostrarme 2. Si ingreso 115 me tiene que mostrar 3).
// AYUDA: Dividir por 10 a un número le remueve un dígito.

/*
let numero = parseInt(prompt("Ingrese un número"));
let contador = 0;

//EJEMPLO 125

while (numero !== 0) { 
    //SE VA EJECUTAR LO DE ABAJO MIENTRAS EL NUMERO SEA DISTINTO DE "0"
    // 12.5  ES DISTINTO DE 0
    // 1.25 ES DISTINTO DE 0
    // 0 NO ES DISTINTO DE 0 // FINALIZA EL CICLO
  numero = parseInt(numero / 10);
  // Dividir por 10 y convertir el resultado a entero //EL RESULTADO DE 125/10 DA 12
  // 1
  // 0
  contador++;
  // EL CONTADOR PASA DE 0 A 1
  // DE 1 A 2
  // DE 2 A 3
}

console.log("El número tiene " + contador + " dígitos.");
*/

// 10) Escriba un programa en dónde se le solicite un número al usuario y determine si es un número primo o no.
// UN NUMERO PRIMO ES UN NUMERO QUE PUEDE SER DIVISIBLE POR 1 Y POR SI MISMO 

/*
let unNumero = parseInt (prompt("Ingrese un numero"))
let contadorDivisores = 0

//ejemplo con numero 7

for (let i = 1 ; unNumero >= i ; i++) {
    
    if (unNumero % i == 0) {
        contadorDivisores ++
    }
}

if (contadorDivisores == 2) {
    console.log ("Es un numero primo")
}
else {
    console.log ("No es un numero primo")
}
*/

//11) Escriba un programa en el que el usuario ingrese un número y utilice bucles for anidados para generar un patrón de asteriscos como un triángulo. Por ejemplo, si el usuario ingresa 5, debería imprimir:
/*  *
    **
    ***
    ****
    *****
*/
/*
let numero = parseInt(prompt("Ingrese un número"));

for (let i = 1; i <= numero; i++) {  // Bucle externo controla las filas
  let fila = "";
  for (let j = 1; j <= i; j++) {  // Bucle interno controla los asteriscos por fila
    fila += "*";  // Agrega un asterisco a la cadena
  } 
  console.log(fila);  // Imprime la fila actual
}
*/

//12) Realizar un programa que le pida al usuario cuántos números quiere ingresar y entre todos los que ingrese calcular cual es el mayor, el menor y la media.

/*
const numerosaIngresar = parseInt(prompt("Ingrese cantidad de numeros a ingresar"))
let serieNumerica = ""
let numeroMenor
let numeroMayor
let sumaTotal = 0
let contadorDeNumeros = 0

console.log("Los numeros a ingresar son " + numerosaIngresar)

while (numerosaIngresar > contadorDeNumeros) {
    let numeroIngresado = parseInt(prompt("Ingrese un numero")) // 2 // 5 // 7 // 1 // 14
    contadorDeNumeros++
    serieNumerica += numeroIngresado + " "
    sumaTotal += numeroIngresado

    if (contadorDeNumeros === 1) {
        numeroMayor = numeroIngresado;
        numeroMenor = numeroIngresado;
    }

    else {
        if (numeroIngresado > numeroMayor) {
            numeroMayor = numeroIngresado
        }

        if (numeroIngresado < numeroMenor) {
            numeroMenor = numeroIngresado
        }
    }
}

const promedio = sumaTotal / numerosaIngresar

console.log("Se ingresaron los numeros " + serieNumerica)
console.log("El numero mayor es " + numeroMayor) 
console.log("El numero menor es " + numeroMenor) 
console.log ("Promedio " + promedio)

*/

//13) Hacer un programa en donde el usuario ingrese un mes y se le muestre en pantalla a qué estación pertenece.


/*
const mesIngresado = prompt ("Ingrese un mes") .toLowerCase()

let estacion

if (mesIngresado == "diciembre" || mesIngresado == "enero" || mesIngresado == "febrero") {
    estacion = "verano"

    alert ("El mes " + mesIngresado + " pertenece a la estacion " + estacion)

}

else if (mesIngresado == "marzo" || mesIngresado == "abril" || mesIngresado == "mayo") {
    estacion = "otoño"

    alert ("El mes " + mesIngresado + " pertenece a la estacion " + estacion)

}

else if (mesIngresado == "junio" || mesIngresado == "julio" || mesIngresado == "agosto") {
    estacion = "inverno"

    alert ("El mes " + mesIngresado + " pertenece a la estacion " + estacion)

}

else if (mesIngresado == "septiembre" || mesIngresado == "octubre" || mesIngresado == "noviembre") {
    estacion = "primavera"

    alert ("El mes " + mesIngresado + " pertenece a la estacion " + estacion)

}

else {
    alert ("El mes ingresado no es valido")
}

*/

// 14) Idem ejercicio anterior pero en este caso que se le muestre la cantidad de días que tiene el mes

/*

const mesIngresado = prompt ("Ingrese un mes") .toLowerCase()

let diasMes

if (mesIngresado == "enero" || mesIngresado == "marzo" || mesIngresado == "julio" || mesIngresado == "agosto" || mesIngresado == "octubre" || mesIngresado == "diciembre") {
    diasMes = 31

    alert ("El mes " + mesIngresado + " tiene " + diasMes + " dias")

}

else if (mesIngresado == "abril" || mesIngresado == "junio" || mesIngresado == "septiembre" || mesIngresado == "noviembre" ) {
    diasMes = 30

    alert ("El mes " + mesIngresado + " tiene " + diasMes + " dias")

}

else if (mesIngresado == "febrero") {
    diasMes = 28

    alert ("El mes " + mesIngresado + " tiene " + diasMes + " dias")

}

else {
    alert ("El mes ingresado no es valido")
}

*/

// 15) Realizar un programa en donde el usuario ingrese un día de la semana y se le muestre en pantalla:
/*
a) Si es el comienzo de la semana
b) Si es fin de semana
c) Si es mitad de semana
*/

/*
const diaSemana = prompt ("Ingrese un dia de semana") .toLowerCase()

let semana

if (diaSemana == "lunes" || diaSemana == "martes") {
    semana = "comienzo de semana"

    alert ("El dia ingresado " + diaSemana + " se ubica en " + semana)
}

else if (diaSemana == "miercoles" || diaSemana == "jueves") {
    semana = "mitad de semana"

    alert ("El dia ingresado " + diaSemana + " se ubica en " + semana)
}

else if (diaSemana == "viernes" || diaSemana == "sabado" || diaSemana == "domingo") {
    semana = "fin de semana"

    alert ("El dia ingresado " + diaSemana + " se ubica en " + semana)
}

*/

// 16) Hacer un programa en el cual se ingrese una figura (Triángulo, cuadrado, círculo y rectángulo) y dependiendo que figura elija, se le pida base, altura o radio y calcular el área.

/*
let figura = prompt ("Ingrese triangulo, cuadrado, circulo o rectangulo")
let base = 0
let altura = 0
let lado = 0
let radio = 0

while (figura != "triangulo" && figura != "cuadrado" && figura != "circulo" && figura != "rectangulo") {
    alert ("figura incorrecta")
    figura = prompt ("Ingrese triangulo, cuadrado, circulo o rectangulo")
}
    
if (figura == "triangulo") {
    base = parseInt(prompt("Ingrese la base del triangulo"))
    altura = parseInt(prompt("Ingrese la altura del triangulo"))
    const areaTriangulo = (base * altura) / 2
    alert ("El area del triangulo es de " + areaTriangulo)

}

else if (figura == "cuadrado") {
    lado = parseInt(prompt("Ingrese el lado del cuadrado"))
    const areaCuadrado = lado ** 2
    alert ("El area del cuadrado es de " + areaCuadrado)
}

else if (figura == "circulo") {
    radio = parseInt(prompt("Ingrese el radio del circulo"))
    const areaCirculo = 3.14 * (radio ** 2)
    alert ("El area del Circulo es de " + areaCirculo)
}

else if (figura == "rectangulo") {
    base = parseInt(prompt("Ingrese la base del Rectangulo"))
    altura = parseInt(prompt("Ingrese la altura del Rectangulo"))
    const areaRectangulo = (base * altura)
    alert ("El area del Rectangulo es de " + areaRectangulo)
}
*/

// 17) Realizar un programa en el cual se ingrese el departamento del trabajador (A, B, C o D), la cantidad de horas trabajadas y se calcule cuánto se le tiene que pagar:
/*
    a) Trabajadores del departamento A: Cobran $25 la hora
    b) Trabajadores del departamento B: Cobran $50 la hora
    c) Trabajadores del departamento C: Cobran $75 la hora
    d) Trabajadores del departamento D: Cobran $100 la hora
*/

/*
let departamentoDelTrabajador = (prompt ("Ingrese el departamento del trabajador: A - B - C - D "))
let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas"))
let pagar = 0

if (departamentoDelTrabajador == "A") {
    pagar = horasTrabajadas * 25
}

else if (departamentoDelTrabajador == "B") {
    pagar = horasTrabajadas * 50
}

else if (departamentoDelTrabajador == "C") {
    pagar = horasTrabajadas * 75
}

else if (departamentoDelTrabajador == "D") {
    pagar = horasTrabajadas * 100
}

console.log ("El total a pagar por " + horasTrabajadas + " en el departamento " + departamentoDelTrabajador + " es de $" + pagar )
*/













































