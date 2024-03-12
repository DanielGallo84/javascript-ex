function Letra(){
    let frase = document.getElementById("fraseInput").value;
var nText = frase.length;
var i;
for (i = 0; i < nText; i++) {
if (frase.substr(i,1) === "a" || frase.substr(i,1) === "e" || frase.substr(i,1) === "i" || frase.substr(i,1) === "o" || frase.substr(i,1) === "u") {
    vocalesEncontradas += caracter;
}
document.getElementById("out").innerHTML = (vocalesEncontradas);
}

}