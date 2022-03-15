let epicStatus=true;
let negraStatus=true;
let adoelscentesStatus=true;


function anadirSubMenus(IdMenu,cantItems){
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
    epica=[1,2,3,4,5];
    negra=[6,7,8,9,10];
    adolescentes=[11,12,13,14,15];
    categorias=[epica,negra,adolescentes];
    estados=[epicStatus,negraStatus, adoelscentesStatus]
    console.log(categorias[categoria]);
    for(let x=0; x<3; x++){
        for(let i=0; i<5; i++){
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
function setTodos(){
    let nombreLibro;
    let libro;
    for(let i=1; i<=15; i++){
        nombreLibro="libro"+i.toString();
        libro=document.getElementById(nombreLibro);
        if(libro.classList[0]=="libroNoVisible"){
            $("#"+nombreLibro).slideDown();
        }
        libro.className="libro"
    }
}

	


