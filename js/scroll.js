let aa;
window.addEventListener("scroll", function(){
    var tamLayaout1= document.getElementById("layout1");
    tamanio=tamLayaout1.clientHeight;
    if (aa<window.scrollY){
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


