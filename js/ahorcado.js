let palabraSeleccionada;
let puntos=0;
let numeroFallos=0;
let numeroAciertos=0;
let letrasPulsadas=[];
let iniciado;
let info;
let peticion=null;
function pulsaLetra(letra){
    if(iniciado && numeroFallos<6 && !estaUsada(letra)){
        letrasPulsadas.push(letra);
        comprobarSeleccion(letra);
    }
    if(numeroAciertos==palabraSeleccionada.length){
        rebot();
        cargaContenido();
    }
}
function estaUsada(letra){
    // comprobamos si se ha usado la letra ya
    let acierto=false;
    for(let i=0; i<letrasPulsadas.length; i++){
        if(letra==letrasPulsadas[i]){
            acierto=true;
            break;
        }
    }
    return acierto;
}
function comprobarSeleccion(letra){
    let acierto=false;
    let axu=palabraSeleccionada.split("");
    // comprobamos si ha havido un acierto o un fallo
    for(let i=0; i<palabraSeleccionada.length; i++){
        // si es acierto se pone la letra que correspondan
        if(axu[i]==letra){
            document.getElementsByClassName("pal2")[i].innerHTML=letra;
            document.getElementsByClassName("pal2")[i].parentNode.className="letraAcertada";
            modPuntos(2,true);
            numeroAciertos++;
            acierto=true;
        }
    }
    // modificamos al letra pulsaada
    letraUsada(letra, acierto);
    // si ha sido un fallo se aumenta el numero de fallos y se modifica el muñeco
    if(!acierto){
        // se modiva el numeor de fallos y de puntos
        modPuntos(1,false);
        numeroFallos++;
        document.getElementById("imagenAhorcado").src="../imagenes/dibuAhorcado/ah"+numeroFallos+".png";
        // si el numero de fallos e 6 llamos al gameOver para reiniciar los elementos
        if(numeroFallos==6){
            rebot();
            modPuntos(puntos,false);
        }
    }
}
function letraUsada(letra, acierto){
    // cambiamos e color de la letra que se ha usado a fallida y usada o solo usada
        let divLetra=document.getElementById("letter"+letra);
    if(acierto){
        divLetra.className="letraUsadaAcierto";
    }else{
        divLetra.className="letraUsadaFallo";
    }
}
function rebot(){
    resturarBotonesLetrasImagenInit();
    //desacer el espacios de palabraselecionar
    document.getElementById("cont3").innerHTML="";
    //quitar la descripcion
    document.getElementById("cont4").innerHTML="";
    //reaturar todas las variables globales
    palabraSeleccionada="";
    info=undefined;
    numeroAciertos=0;
    numeroFallos=0;
    letrasPulsadas=[];
    iniciado=false;
}
function resturarBotonesLetrasImagenInit(){
    for(let i=0; i<letrasPulsadas.length; i++){
        document.getElementById("letter"+letrasPulsadas[i]).className="button_letter";
    }
    document.getElementById("imagenAhorcado").src="../imagenes/dibuAhorcado/ah0.png";
}

function cargaContenido() {
    var peticion_http=new XMLHttpRequest();
    peticion_http.onreadystatechange = function(){
        // cuano la respuesta sea valida guardamo el contenido en info
        // lo pasamos a una variabel tipo json
        // llamamos a la funcion que seleciona la palabra y carga todo el contenido
        if(peticion_http.readyState == 4 & peticion_http.status == 200) {
            info=peticion_http.responseText;
            info=JSON.parse(info)
            selecionarPalabra();
        } else {
            // hacer alguna animacion de carga o algo
            console.log("cargando")
        }
    };
    peticion_http.open("GET",'http://programacion-cum.unex.es/diccionario.php', true);
    peticion_http.setRequestHeader("Content-type", "application/json");
    peticion_http.send();
}

function selecionarPalabra( ){
    let palabra, definicion;
    palabra=info.Palabra.toUpperCase();
    definicion=info.Definicion;
    // solo se produce una vez cada partida
    if(!iniciado){
        iniciado=true;
        palabraSeleccionada=palabra;
        anadirDescripcion(definicion);
        // definimos la camditadad de letras 
        definicionTempleGrid(palabraSeleccionada.length);
        // añadimos los div que correspondan
        for(let i=0; i<palabraSeleccionada.length; i++){
            var as = document.createElement("div");
            as.className="pal"
            var as2= document.createElement("div");
            as2.innerHTML="_";
            as2.className="pal2"
            as.appendChild(as2);
            document.getElementById("cont3").appendChild(as);
        }
    }
}

function anadirDescripcion(des){
    // añadimos la descripcion al cuadro de descripcion
    let as = document.createElement("p");
    as.innerHTML=des;
    as.className="descripcion"
    document.getElementById("cont4").appendChild(as);
}

function definicionTempleGrid(tam){
    // definimos el numeor de letras que tiene que adivinar el usuario
    let valor=""
    for(let a=0; a<tam;a++){
        valor=valor+"5% "
    }
    let axu = document.getElementById("cont3");
    axu.style.cssText= "grid-template-columns:"+valor+";";
}

function modPuntos(cantidad,sumRes){
    if(sumRes){
        puntos+=cantidad;
    }else{
        if(puntos>0){
            puntos-=cantidad;
        }
    }
    document.getElementById("numPuntos").innerHTML=puntos.toString();
}
