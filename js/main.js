const imagenesZapas = [
    "./assets/img/img01.png",
    "./assets/img/img02.png",
    "./assets/img/img03.png",
    "./assets/img/img04.png",
    "./assets/img/img05.png",
    "./assets/img/img06.png",
    "./assets/img/img07.png",
    "./assets/img/img08.png",
    "./assets/img/img09.png",
    "./assets/img/img10.png",
    "./assets/img/img11.png",
    "./assets/img/img12.png",
    "./assets/img/img13.png",
    "./assets/img/img14.png",
    "./assets/img/img15.png",
    "./assets/img/img16.png",
    "./assets/img/img17.png",
    "./assets/img/img18.png",
    "./assets/img/img19.png",
    "./assets/img/img20.png",
    "./assets/img/img21.png",
    "./assets/img/img22.png",
    "./assets/img/img23.png",
    "./assets/img/img24.png",
    "./assets/img/img25.png",
    "./assets/img/img26.png",
    "./assets/img/img27.png",
    "./assets/img/img28.png",
    "./assets/img/img29.png",
    "./assets/img/img30.png",
    "./assets/img/img31.png",
    "./assets/img/img32.png",
    "./assets/img/img33.png",
    "./assets/img/img34.png",
    "./assets/img/img35.png",
    "./assets/img/img36.png",
]

const rango = document.querySelector("#rango")
const zapas = document.querySelector("#zapas")

// INICIO DEL PROGRAMA

rango.value = localStorage.getItem("rango")
zapas.src = imagenesZapas[localStorage.getItem("rango")]

rango.addEventListener("input", (e) => {
    let valorRango = e.target.value // me da el numero de rango que tiene el input
    zapas.src = imagenesZapas[valorRango] // le asigna al id zapas del nodo html el elemento que este situado en el indice tomado de valorRango
    localStorage.setItem ("rango" , valorRango) // Almacena el valor del rango q tiene el input 
})







