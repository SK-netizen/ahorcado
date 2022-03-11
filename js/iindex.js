var direcion=true;
var ultimoScrollTop = 0;
let aa
window.addEventListener("scroll", function(){
    var tamLayaout1= document.getElementById("layout1");
    tamanio=tamLayaout1.clientHeight;
    if (direcion){
        let axu2=window.scrollY-aa;
        if(tamanio>90){
            if((tamanio-axu2<90)){
                tamanio=90;
            }else{
                tamanio=tamanio-axu2;
            }
        }
    } else {
        let axu=aa-window.scrollY;
        /* windos meno lo qu mida el body*/
        if(  !isNaN(axu) && axu>0 && tamanio<160 ){
            if((axu+tamanio)>160){
                tamanio=160;
            }else{
                tamanio=tamanio+axu;
            }
        }
    }
    tamLayaout1.style.cssText= "height:"+tamanio.toString()+"px;";
    aa=window.scrollY
})



function detectorUltimoScroll(){
  var ultimoScroll = 0;

  window.onscroll = function() {
      let scrollActual = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
      if (scrollActual > 0 && ultimoScroll <= scrollActual){
        ultimoScroll = scrollActual;
          direcion=true;
      }else{
        ultimoScroll = scrollActual;
          direcion=false;
      }
  };
}


detectorUltimoScroll();
