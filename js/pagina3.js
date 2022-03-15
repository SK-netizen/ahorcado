function numeroTelefono() {
    let error = false;
    let numero = document.getElementById("telefono").value;
    numero = numero.split("");
    if (numero.length < 6) {
        error = true;
    } else {
        for (let i = 0; i < 6; i++) {
            if (isNaN(numero[i])) {
                error = true;
            }
        }
    }
    if (error) {
        alert("numeor de telefono no valido");
        return false;
    }
}

function emailValidation() {
    let error = false;
    let email = document.getElementById("email").value;
    email = email.split("@");
    if (email.length < 2) {
        alert("Email invalido");
        return false;

    } else {
        if (email[1].split(".").length < 2) {
            alert("Email invalido");
            return false;
        }
    }
}

function cvvValidation() {
    let cvv = document.getElementById("cvv").value;
    if (cvv == "000" || cvv.length!=3) {
        alert("CVV erroneo")
        return false;
    }
}

function generoValidation() {
    let error = false;
    let h = document.getElementById("h");
    let m = document.getElementById("m");
    let o = document.getElementById("o");
    if (h.cheked == false && m.checked == false && o.checked == false) {
        alert("Debes elegir uno");
        return false;
    }
}
function pinValidation(){
    let pin=document.getElementById("pin").value;
    if(pin.length<4){
        alert("Pin desmasiado corto");
        return false;
    }
}
function numTarjetaValidation(){
    let numTarjeta=document.getElementById("numTarjeta").value;
    numTarjeta=numTarjeta.split("-");
    if(numTarjeta.length!=4){
        alert("Error numero de tarjeta invalido");
        return false;
    }else{
        for(let i=0;i<4;i++){
            let axu=numTarjeta[i].split("");
            if(axu.length!=3){
                alert("Error numero de tarjeta invalido");
                return false;
                break;
            }
            for(let x=0;x<3; x++){
                if(isNaN(axu[x])){
                    alert("Error numero de tarjeta invalido");
                    return false;
                    break;
                }
            }
        }
    }
}

function validacion() {
    let doc = document.getElementById("formulario");
    let error1 = generoValidation();
    let error2 = emailValidation();
    let error4= cvvValidation();
    let error3 = numeroTelefono();
    let error5 = pinValidation();
    let error6 = numTarjetaValidation();
    if (error1 = false || error3 == false || error2 == false || error4 == false || error5 == false || error6 == false) {
        alert("No se pudo enviar el formulario")
        return false;
    } else {
        alert("Todo correcto,tienes una semana para leer el libro en caso de tardar mas se te aplicara un recargo de 3000€ por dia de retraso");
        doc.submit();
    }
}
