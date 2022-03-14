let aa;
let epicStatus=true;
let negraStatus=true;
let adoelscentesStatus=true;

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


function anadirSubMenus(IdMenu,cantItems){
    /*$("#libro2").slideUp();
    $("#libro3").hide();
    $("#libro2").slideDown();
    */
    let as;
    let element;
    $("#menuLateral"+IdMenu).toggleClass("menuLateralPulsado")
    for(let i=1; i<=cantItems; i++){
        as="menuLateral"+IdMenu+"."+i.toString()
        element=document.getElementById(as);
        if(element.classList[0]=="subMenuLateral"){
            if(i===cantItems){
                element.className="subMenuLateralVisibleUltimo";
            }
            else{
                element.className="subMenuLateralVisible";
            }
        }else{
            element.className="subMenuLateral";
        }
    }
}
function setCategoria(categoria){
    let libro;
    let nomLibroId;
    epica=[1,2,3,4];
    negra=[5,6,7,8];
    adolescentes=[9,10,11,12];
    categorias=[epica,negra,adolescentes];
    estados=[epicStatus,negraStatus, adoelscentesStatus]
    console.log(categorias[categoria]);
    for(let x=0; x<3; x++){
        for(let i=0; i<4; i++){
            nomLibroId="libro"+categorias[x][i].toString();
            libro = document.getElementById(nomLibroId)
            if(libro.classList[0]=="libro"){
                if(x+1==categoria){
                    libro.className="libroVisible";
                }else{
                    $("#"+nomLibroId).slideUp();
                    libro.className="libroNoVisible";
                }
            }else{
                if(libro.classList[0]=="libroNoVisible" && x+1==categoria){
                    $("#"+nomLibroId).slideDown();
                    libro.className="libroVisible"
                }else{
                    if(libro.classList[0]=="libroVisible" && x+1==categoria){
                        $("#"+nomLibroId).slideUp();
                        libro.className="libroNoVisible"
                    }
                }
            }
        }
    }
}

	


