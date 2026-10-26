
function conversione(){
    let valore;
    let usa;
    let jp;
    let uk;

    valore = document.getElementById("valuta").value;
    valore = parseFloat(valore);

    if(valore > 0 && !isNaN(valore)){
        usa = valore*1.16;
        document.getElementById("America").innerHTML = "$" + usa.toFixed(2);

        uk = valore*0.87;
        document.getElementById("Regno Unito").innerHTML = "£" + uk.toFixed(2);

        jp = valore*178.16;
        document.getElementById("Giappone").innerHTML = "$" + jp.toFixed(2);
        
    }
}