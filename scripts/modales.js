/* PUNTOS */
var puntoSimbolos = document.getElementById("puntoSimbolos");
var puntoEstetica = document.getElementById("puntoEstetica");
var puntoAlbum = document.getElementById("puntoAlbum");

var palabraSimbolo = document.getElementById("palabraSimbolo");
var palabraEstetica = document.getElementById("palabraEstetica");
var palabraAlbum = document.getElementById("palabraAlbum");

var textoModal = document.getElementById("textoModal");

/* HOVERS PUNTOS */

puntoSimbolos.addEventListener("mouseover", PuntoSimbolo);
puntoEstetica.addEventListener("mouseover", puntoEstetic);
puntoAlbum.addEventListener("mouseover", puntoAlbu);

function PuntoSimbolo(){
    puntoSimbolos.style.backgroundColor  = "#ffe000";
    puntoEstetica.style.backgroundColor  = "#ffffff";
    puntoAlbum.style.backgroundColor  = "#ffffff";
    palabraSimbolo.style.opacity = "1";
    palabraEstetica.style.opacity = "0";
    palabraAlbum.style.opacity = "0";

    textoModal.innerHTML = "";
}

function puntoEstetic(){
    puntoEstetica.style.backgroundColor  = "#ffe000";
    puntoSimbolos.style.backgroundColor  = "ffffff";
    puntoAlbum.style.backgroundColor  = "#ffffff";
    palabraSimbolo.style.opacity = "0";
    palabraEstetica.style.opacity = "1";
    palabraAlbum.style.opacity = "0";

    imagenTapa.src="../images/p2_Crows.jpg";
    textoModal.innerHTML = "";
}

function puntoAlbu(){
    puntoSimbolos.style.backgroundColor  = "#ffffff";
    puntoEstetica.style.backgroundColor  = "#ffffff";
    puntoAlbum.style.backgroundColor  = "#ffe000";
    palabraSimbolo.style.opacity = "0";
    palabraEstetica.style.opacity = "0";
    palabraAlbum.style.opacity = "1";

    imagenTapa.src="../images/p2_Crows.jpg";
    textoModal.innerHTML = "En el tema de la portada se representa la entrada al templo masónico, donde se pueden ver los dos pilares y las escalinatas que llevan hacia el altar donde se encuentra el ojo de la providencia.";
}


/* ------------------------- */

/* ELEMENTOS GRILLA CROWS */

var snake = document.getElementById("snake");
var snake1 = document.getElementById("snake1");

var columns = document.getElementById("columns");
var columns1 = document.getElementById("columns1");

var heads = document.getElementById("heads");
var heads1 = document.getElementById("heads1");

var portico = document.getElementById("portico");
var portico1 = document.getElementById("portico1");
var portico2 = document.getElementById("portico2");
var portico3 = document.getElementById("portico3");
var portico4 = document.getElementById("portico4");

var cupula = document.getElementById("cupula");
var cupula1 = document.getElementById("cupula1");

var columnas12 = document.getElementById("columnas12");
var columnas12a = document.getElementById("columnas12a");

var eye = document.getElementById("eye");

var circulo = document.getElementById("circulo");
var circulo1 = document.getElementById("circulo1");
var circulo2 = document.getElementById("circulo2");
var circulo3 = document.getElementById("circulo3");

var triangulo = document.getElementById("triangulo");

var escalera = document.getElementById("escalera");

var imagenTapa = document.getElementById("imagenTapaCrows");

/* HOVERS GRILLA CROWS */

snake.addEventListener("mouseover", Snake);
snake1.addEventListener("mouseover", Snake);

columns.addEventListener("mouseover", Columns);
columns1.addEventListener("mouseover", Columns);

heads.addEventListener("mouseover", Heads);
heads1.addEventListener("mouseover", Heads);

portico.addEventListener("mouseover", Portico);
portico1.addEventListener("mouseover", Portico);
portico2.addEventListener("mouseover", Portico);
portico3.addEventListener("mouseover", Portico);
portico4.addEventListener("mouseover", Portico);

cupula.addEventListener("mouseover", Cupula);
cupula1.addEventListener("mouseover", Cupula);

columnas12.addEventListener("mouseover", Columnas12);
columnas12a.addEventListener("mouseover", Columnas12);

eye.addEventListener("mouseover", Eye);

circulo.addEventListener("mouseover", Circulo);
circulo1.addEventListener("mouseover", Circulo);
circulo2.addEventListener("mouseover", Circulo);
circulo3.addEventListener("mouseover", Circulo);

triangulo.addEventListener("mouseover", Triangulo);

escalera.addEventListener("mouseover", Escalera);

/* FUNCIONES DE CAMBIO DE IMAGEN HOVER */

function Snake(){
    imagenTapa.src="../images/snakes.png";
    PuntoSimbolo();
    textoModal.innerHTML = "<strong>Serpientes</strong> <br><br> La serpiente representa al infinito, la espiritualidad, sabiduría y fuerza creativa. Representa al Caballero de la serpiente de bronce. <br><br> La serpiente enroscada en una columna simboliza la búsqueda interior de la trascendencia divina."

}

function Columns(){
    imagenTapa.src="../images/columns.png";
    PuntoSimbolo();
    textoModal.innerHTML = "<strong>Pilares</strong> <br><br> Los dos pilares representan a las columnas del Templo masónico, llamadas Jakin (izquierda) y Boaz (derecha). <br> <br> La primera simboliza el estádo natural y primogénito del iniciado, la piedra en bruto, mientras que la segunda es símbolo del trabajo y conocimiento adquirido del masón, la piedra pulida."
}

function Heads(){
    imagenTapa.src="../images/heads.jpg";
    PuntoSimbolo();
    textoModal.innerHTML = "<strong>Figura masculina y femenina</strong> <br><br> El busto masculino (izquierda) representa a la fuerza, que en el Templo es representado por la figura de Hércules, y el femenino la belleza, representado por la figura de la Diosa Venus. Ambos simbolizan la dualidad del Universo."
}

function Portico(){
    imagenTapa.src="../images/portico.jpg";
    PuntoSimbolo();
    textoModal.innerHTML = "<strong>Arco de medio punto</strong> <br><br> Representa la entrada al Templo masónico, y se relaciona con la leyenda del Talmud, en donde se relata que justo en el medio del arco se guardó una réplica del Arca de la Alianza, cofre que escondía la palabra perdida de la Biblia."
}

function Cupula(){
    imagenTapa.src="../images/cupula.jpg";
    PuntoSimbolo();
    textoModal.innerHTML = "<strong>Bóveda</strong> <br><br> El techo abovedado simboliza la bóveda celeste, el cosmos. Relacionado con la parte espiritual del hombre."
}

function Columnas12(){
    imagenTapa.src="../images/12columnas.jpg";
    PuntoSimbolo();
    textoModal.innerHTML = "<strong>Columnas</strong> <br><br> Las columnas simbolizan la conexión entre lo terrenal (el suelo) y lo espiritual (el cielo).  En el templo masónico hay dispuestas 12 columnas que representan los signos zodiacales, ya que son las estructuras que “sostienen” el cosmos."
}

function Eye(){
    imagenTapa.src="../images/eye.jpg";
    PuntoSimbolo();
    textoModal.innerHTML = "<strong>Ojo dentro de círculo </strong> <br><br> El ojo de la providencia, manifiesta la omnipresencia de Dios como centro creador del universo, conocido como G.A.D.U. (Gran Arquitecto del Universo), el delta luminoso, el Alfa y el Omega, el YOD (hebreo). <br> <br> El círculo al ser una figura geométrica sin principio ni fin resalta la eternidad y perfección del Universo creado por Dios al yuxtaponerse con el ojo de la providencia."
}

function Circulo(){
    imagenTapa.src="../images/eye.jpg";
    PuntoSimbolo();
    textoModal.innerHTML = "<strong>Ojo dentro de círculo </strong> <br><br> El ojo de la providencia, manifiesta la omnipresencia de Dios como centro creador del universo, conocido como G.A.D.U. (Gran Arquitecto del Universo), el delta luminoso, el Alfa y el Omega, el YOD (hebreo). <br> <br> El círculo al ser una figura geométrica sin principio ni fin resalta la eternidad y perfección del Universo creado por Dios al yuxtaponerse con el ojo de la providencia."
}

function Triangulo(){
    Snake();
}

function Escalera(){
    imagenTapa.src="../images/escalera.png";
    PuntoSimbolo();
    textoModal.innerHTML = "<strong>Escalinata</strong> <br><br> Representa a la escalera de Jacob, y simboliza el ascenso a la dignidad perseguida por el masón. Los siete peldaños se asocian a las siete virtudes que debe atravesar y dominar el Maestro masón; estos son: la Prudencia, Templanza, Fortaleza, Justicia, Fe, Esperanza y Caridad. Cada una de estas siete virtudes también se interpretan como: La primera existencia (plomo y saturno), el Mundo de la vida primitiva (azogue y Mercurio), los Cielos (cobre y Venus), la Mitad de la vida (estaño y Júpiter), el Mundo de los orígenes (hierro y Marte), la Mansión de los justos (plata y Luna) y la Verdad (oro y Sol).<br><br>Dentro de las ciencias representan: la gramática, retórica, lógica, aritmética, geometría, música y astronomía."
}

