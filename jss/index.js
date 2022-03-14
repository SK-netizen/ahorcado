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
    epica=[1,3,5,12];
    negra=[2,4,7,11];
    adolescentes=[6,8,9,10];
    categorias=[epica,negra,adolescentes];
    console.log(categorias[categoria]);
    for(int i=1; i<4, i++){
        let libro = document.getElementById("libro"+i.toString());
        if(libro.classList[0]="libro"){
            $("libro"+i.toString()).slideUp();
            libro.className="libroNoVisible"
        }
    }
}

	


