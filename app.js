const boton = document.getElementById("boton--hamburguesa");
const menu = document.getElementById("nav-menu--desplegar");
boton.addEventListener("click", () => {
    /*classList: Manipula clases
    toogle: agrega si no hay o quita si hay */
    menu.classList.toggle("nav-menu__mostrar");
});
const hero = document.getElementById("fondo-dinamico");
const arregloHero = ["lacteos", "bebidas", "papeleria", "verduras"];
let index = 0;
function cambiarFondo(){
    let link = "Imagenes/array/hero/arreglo__" + arregloHero[index] + ".png";
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${link}')`;
    index++;
    if (index >= arregloHero.length) {
        index = 0;
    }
}
cambiarFondo();
setInterval(cambiarFondo, 3000);

const ofertasTrack = [
    {nombre : "Elemento-1", precio : 500, ruta :"Imagenes/array/oferta/oferta--1.png"},
    {nombre : "Elemento-2", precio : 500, ruta :"Imagenes/array/oferta/oferta--2.png"},
    {nombre : "Elemento-3", precio : 200, ruta :"Imagenes/array/oferta/oferta--3.png"},
    {nombre : "Elemento-4", precio : 400, ruta :"Imagenes/array/oferta/oferta--4.png"}
];
const topVendidos = [
    {nombre : "TopElemento-1",precio : 400 , ruta : "Imagenes/array/oferta/oferta--1.png"},
    {nombre : "TopElemento-1",precio : 60 , ruta : "Imagenes/array/oferta/oferta--2.png"},
    {nombre : "TopElemento-1",precio : 70 , ruta : "Imagenes/array/oferta/oferta--3.png"},
    {nombre : "TopElemento-1",precio : 100 , ruta : "Imagenes/array/oferta/oferta--4.png"}
];
function crearCarrusel (cadena, productos) {
    const cadenaTipo = document.querySelector(cadena); /* devuelve el primer elemento que coincida con el selector */
    productos.forEach(element => {
        /* La diferencia es que innerHTML reconstruye todo lo interno del elemento desde 0
            perdiendo asi sus eventos internos */
        cadenaTipo.insertAdjacentHTML("beforeend", `
            <div class  = "card">
                <figure>
                    <img src = "${element.ruta}" alt = "${element.nombre}">
                </figure>
                <h3 class = "categorias__nombres">${element.nombre}</h3>
                <p>S/. ${element.precio}</p>
            </div>
        `);
    });
}
crearCarrusel(".carrusel-prod__track--oferta", ofertasTrack);
crearCarrusel(".carrusel-prod__track--cabeza", topVendidos);
function usarCarrusel (control) {
    const track = control.querySelector(".carrusel-prod__track");
    const btnIzq = control.querySelector(".carrusel-prod__flecha--izquierda").closest("button");
    const btnDer = control.querySelector(".carrusel-prod__flecha--derecha").closest("button");

    btnDer.addEventListener("click", () => {
        track.scrollBy({left: 300, behavior: "smooth"});
    });
    btnIzq.addEventListener("click", () => {
        track.scrollBy({left: -300, behavior: "smooth"});
    });
}
document.querySelectorAll(".carrusel-prod__control").forEach(usarCarrusel);
/* es lo mismo que poner: forEach(control => {usarCarrusel(control)}) */
