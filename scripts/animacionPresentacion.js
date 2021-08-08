var llaveOjoImg = document.getElementById("llaveOjoImg");
var compasImg = document.getElementById("compasImg");
var barraNavegacion = document.getElementById("barraNavegacion");
var ingresar = document.getElementById("ingresar");
var bienvenidos = document.getElementById("bienvenidos");
var textoIntro = document.getElementsByClassName("textoIntro");

var textoColumnas = document.getElementById("textoColumnas");
var perspectivas = document.getElementById("perspectivas");
var footer = document.getElementById("footer");
var portadasSolas = document.getElementById("portadasSolas");

textoColumnas.style.display = "none";
perspectivas.style.display = "none" ;
footer.style.display = "none" ;

llaveOjoImg.addEventListener("click", Fusion);

function Fusion(){

    llaveOjoImg.style.animationDelay = "3s";
    llaveOjoImg.style.animationDuration = "10s";
    llaveOjoImg.style.animationName = "desaparecer";
    llaveOjoImg.style.animationFillMode = "forwards";

    ingresar.style.animationDuration = "5s";
    ingresar.style.animationName = "desaparecer";
    ingresar.style.animationFillMode = "forwards";

    compasImg.style.animationDelay = "3s";
    compasImg.style.animationDuration = "10s";
    compasImg.style.animationName = "aparecer";
    compasImg.style.animationFillMode = "forwards";

    bienvenidos.style.animationDelay = "5s";
    bienvenidos.style.animationDuration = "5s";
    bienvenidos.style.animationName = "aparecer";
    bienvenidos.style.animationFillMode = "forwards";

    textoIntro[0].style.animationDelay = "2s";
    textoIntro[0].style.animationDuration = "6s";
    textoIntro[0].style.animationName = "desaparecer";
    textoIntro[0].style.animationFillMode = "forwards";

    textoIntro[1].style.animationDelay = "2s";
    textoIntro[1].style.animationDuration = "6s";
    textoIntro[1].style.animationName = "desaparecer";
    textoIntro[1].style.animationFillMode = "forwards";

    barraNavegacion.style.animationDelay = "5s";
    barraNavegacion.style.animationDuration = "5s";
    barraNavegacion.style.animationName = "aparecer";
    barraNavegacion.style.animationFillMode = "forwards";

    textoColumnas.style.display = "grid";
    perspectivas.style.display = "inherit" ;
    footer.style.display = "inherit" ;
    
}


/* var caminoMason = document.getElementById("caminoMason");
var portadasSolas = document.getElementById("portadasSolas");

caminoMason.addEventListener("mouseover", Portadas);

function Portadas(){
    caminoMason.src="../images/triangulo_discos_amarillo.svg";
    console.log("Qgi")
} */


