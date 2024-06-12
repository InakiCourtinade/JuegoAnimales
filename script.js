//imagenes de los animales
let animales = ["hornero.jpg", "Carpincho.jpg", "yaguarete.jpg", "yarara.jpg", "Aguara.jpg","tapir.jpg", "vicuña.jpg","pinguino.jpg","mono.jpg"];

let correcta = [2,1,1,2,0,1,0,1,0];

let opciones = [];

opciones.push(["AGUILA", "PALOMA", "HORNERO"]);
opciones.push(["NUTRIA", "CARPINCHO", "CASTOR"]);
opciones.push(["PUMA", "YAGUARETE", "TIGRE"]);
opciones.push(["BAMBA NEGRA", "PITON", "YARARA"]);
opciones.push(["AGUARÁ GUAZÚ", "ZORRO", "HIENA"]);
opciones.push(["OSO HORMIGUERO", "TAPIR", "CERDO"])
opciones.push(["VICUÑA", "LLAMA", "GUANACO"])
opciones.push(["PINGUINO REY", "PINGUINO DE MAGALLANES", "PINGUINO EMEPERADOR"])
opciones.push(["MONO AULLADOR", "GORILA", "CHIMPANCE"])


let posicion = 0;

let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posicion = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    suboAnimales();

}


function suboAnimales(){
    if(animales.length <= posicion){
        terminarJuego();
    }
    else{
        
        limpiarOpciones();

        document.getElementById("imgAnimal").src = "imagenes/" + animales[posicion];
        document.getElementById("n0").innerHTML = opciones[posicion][0];
        document.getElementById("n1").innerHTML = opciones[posicion][1];
        document.getElementById("n2").innerHTML = opciones[posicion][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posicion]){//acertó
        
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
     
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

    
        document.getElementById("n" + correcta[posicion]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posicion]).className = "letra letraAcertada";
    }
    posicion++;
    setTimeout(suboAnimales,1000);
}
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = animales.length - cantidadAcertadas;
}

function volverAlInicio(){

    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "flex";
    document.getElementById("pantalla-juego").style.display = "none";
}
