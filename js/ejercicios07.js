/*
1. Dado el siguiente array de arrays, se pide transformarlo para que de como
resultado un único array con todos los elementos. Para ese ejemplo, el array
resultante sería: [1, 2, 3, 4, 5, 6, 7, 8, 9].
const listaNumeros = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
];

*/

/*
const listaNumeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
] 

const nuevoArray = listaNumeros.reduce (function (acumulador,subArray) { 

    return acumulador.concat(subArray)
    
} , [])


console.log (nuevoArray)
*/

/*
2. Dado el siguiente array
a. Se pide primero obtener todas las personas del género femenino (genero
= “F”)
b. Una vez obtenidas, se pide calcular el promedio de edad sobre ellas
const listaPersonas = [
 { nombre: "Matias", genero: "M", edad: 25 },
 { nombre: "Fernanda", genero: "F", edad: 27 },
 { nombre: "Federico", genero: "M", edad: 32 },
 { nombre: "Camila", genero: "F", edad: 12 },
 { nombre: "Gabriela", genero: "F", edad: 42 },
];
*/

/*
const listaPersonas = [
    { nombre: "Matias", genero: "M", edad: 25 },
    { nombre: "Fernanda", genero: "F", edad: 27 },
    { nombre: "Federico", genero: "M", edad: 32 },
    { nombre: "Camila", genero: "F", edad: 12 },
    { nombre: "Gabriela", genero: "F", edad: 42 },
   ];

/*


/*
// SI USARA EL FOR EACH // Recorre cada elemento del array por cada elemento ejecuto una funcion que yo le diga
listaPersonas.forEach(element => {
    console.log ("Tu nombre es " + element.nombre + " - Tu genero es " + element.genero + " - Tu edad es de " + element.edad)
    console.log ("Hola " + element.nombre)
});
*/

/*
// SI USARA EL FIND // Utiliza una funcion de comparacion que busca el primer elemento del array que cumpla con esa condicion
const metodoFind = listaPersonas.find ((el) => el.nombre.toLowerCase() === "matias".toLowerCase())

console.log (metodoFind)
*/

/*
const personasF = listaPersonas.filter((el) => el.genero === "F")

console.log (personasF)


edadAcumulada = 0

personasF.forEach((el) => {
     edadAcumulada += el.edad
});

const promedioEdad = edadAcumulada / personasF.length

console.log (promedioEdad)
*/

/*
3. Dado el siguiente array de letras, se pide obtener cuantas veces se repite
cada letra. Para este ejemplo sería:
a: 3
b: 2
c: 1
d: 1
f: 1
g: 2
const letras = ['a', 'b', 'a', 'c', 'b', 'd', 'f', 'g', 'a']

*/

/*
const letras = ['a', 'b', 'a', 'c', 'b', 'd', 'f', 'g', 'a'];

// Usamos reduce para contar las ocurrencias de cada letra
const conteoLetras = letras.reduce((acumulador, actual) => {
    // Si la letra ya existe en el objeto, incrementamos su valor
    if (acumulador[actual]) {
        acumulador[actual]++;
    } else {
        // Si la letra no existe, la inicializamos con 1
        acumulador[actual] = 1;
    }
    return acumulador;
}, {});


console.log(conteoLetras);
*/

/*
4. Se solicita obtener la sumatoria solamente de los números positivos.
const numeros = [1, -4, 12, 0, -3, 29, -150];
*/

/* FORMA 01
const numeros = [1, -4, 12, 0, -3, 29, -150];


const numerosFilter = numeros.filter((el)=> el > 0)


const numerosReduce = numerosFilter.reduce ((acumulador,actual) => acumulador + actual, 0)

console.log (numerosFilter)

console.log (numerosReduce)
*/


/* FORMA 02
const numeros = [1, -4, 12, 0, -3, 29, -150];

const resultado = numeros.reduce ((acumulador , actual) => {
    if (actual > 0) {
        acumulador += actual
    }
    return acumulador
}, 0)

console.log (resultado)
*/

/*
5. Dado el siguiente array, se solicita aumentar los precios de todos los
productos en un 15%
const productos = [
 {
 nombre: "arroz",
 precio: 20,
 },
 {
 nombre: "Fideos",
 precio: 15,
 },
 {
 nombre: "Tomate",
 precio: 5,
 }
];

*/

/*
const productos = [
    {
        nombre: "arroz",
        precio: 20,
    },
    {
        nombre: "Fideos",
        precio: 15,
    },
    {
        nombre: "Tomate",
        precio: 5,
    }
];

const productosIncremento = productos.map((el) => {

    return {
        Nombre: el.nombre,
        Precio: el.precio * 1.15
    }
}
)

console.log(productosIncremento)
*/

/*
6. Dado el siguiente array se pide obtener.
a. La población total de Argentina y la población total de España
b. Las provincias de Argentina que tienen más de 1500 habitantes
c. Las provincias de España que tienen más de 4000 habitantes
d. Cuál es la provincia de Argentina que tiene más población
e. Cuál es la provincia de España que tiene más población

*/

/*
const poblaciones = [
    {
        pais: "Argentina",
        provincia: "Buenos Aires",
        poblacion: 2000,
    },
    {
        pais: "España",
        provincia: "Cataluña",
        poblacion: 5000,
    },
    {
        pais: "España",
        provincia: "Valencia",
        poblacion: 2500,
    },
    {
        pais: "Argentina",
        provincia: "Santa Fe",
        poblacion: 1000,
    },
    {
        pais: "España",
        provincia: "Madrid",
        poblacion: 3000,
    },
    {
        pais: "Argentina",
        provincia: "Córdoba",
        poblacion: 3500,
    }
]


// a. La población total de Argentina y la población total de España

const poblacionTotalArgentina = poblaciones.reduce((acumulador, actual) => {
    if (actual.pais === "Argentina") {
        acumulador += actual.poblacion
    }
    return acumulador
}, 0)

const poblacionTotalEspaña = poblaciones.reduce((acumulador, actual) => {
    if (actual.pais === "España") {
        acumulador += actual.poblacion
    }
    return acumulador
}, 0)

console.log ("Poblacion Total de Argentina: " + poblacionTotalArgentina)
console.log ("Poblacion Total de España: " + poblacionTotalEspaña)

// b. Las provincias de Argentina que tienen más de 1500 habitantes

const argMas1500Hab = poblaciones.filter((el => el.pais === "Argentina" && el.poblacion > 1500))

console.log (argMas1500Hab)

// c. Las provincias de España que tienen más de 4000 habitantes

const espMas4000Hab = poblaciones.filter((el => el.pais === "España" && el.poblacion > 4000))

console.log (espMas4000Hab)

// d. Cuál es la provincia de Argentina que tiene más población

const provinciaArgMayorPob = poblaciones.reduce((acumulador, actual) => {
    if (actual.pais == "Argentina" && actual.poblacion > acumulador.Poblacion) {
        return {
            Provincia: actual.provincia,
            Poblacion: actual.poblacion
        }
    }
    return acumulador
}, {Provincia: "" , Poblacion: 0})

console.log(provinciaArgMayorPob)


// e. Cuál es la provincia de España que tiene más población

const provinciaEspMayorPob = poblaciones.reduce((acumulador, actual) => {
    if (actual.pais == "España" && actual.poblacion > acumulador.Poblacion) {
        return {
            Provincia: actual.provincia,
            Poblacion: actual.poblacion
        }
    }
    return acumulador
}, {Provincia: "" , Poblacion: 0})

console.log(provinciaEspMayorPob)

*/

/*
7. Dado el siguiente array, obtenga un nuevo array con las palabras que tienen 5
o más caracteres:
const palabras = ['casa', 'perro', 'gato', 'elefante', 'ratón
*/

/*
const palabras = ["casa", "perro", "gato", "elefante", "ratón"]

const palabrasCincoOMasCarac = palabras.filter((el)=> el.length >= 5)

console.log (palabrasCincoOMasCarac)
*/

/*
8. Dado el siguiente array, escriba una función que reciba un array y un atributo
y ordene el array por ese atributo:
*/

/*
const personas = [
    { nombre: 'Juan', apellido: "Fernandez", edad: 30 },
    { nombre: 'María', apellido: "Gomez", edad: 25 },
    { nombre: 'Pedro', apellido: "Rodriguez", edad: 35 },
    { nombre: 'Tomas', apellido: "Ramirez", edad: 20 },
    { nombre: 'Matias', apellido: "Mendez", edad: 40 },
];

function ordenarPorPropiedad(array, propiedad) {
    return array.sort((a, b) => {
        if (a[propiedad] > b[propiedad]) {
            return 1;
        }
        if (a[propiedad] < b[propiedad]) {
            return -1;
        }
        return 0;
    });
}

const personasOrdenadasPorEdad = ordenarPorPropiedad(personas, "edad")
console.log(personasOrdenadasPorEdad);

const personasOrdenadasPorNombre = ordenarPorPropiedad(personas, "nombre")
//console.log(personasOrdenadasPorNombre);

const personasOrdenadasPorApellido = ordenarPorPropiedad(personas, "apellido")
//console.log(personasOrdenadasPorApellido);
*/









































