

function Vocales() {
// Contador para vocales
let contadorVocales = 0;
let frase = document.getElementById("fraseInput").value;
// Recorrer cada caracter de la frase
for (let i = 0; i < frase.length; i++) {
  // Convertir el caracter a minúscula para hacer la comparación insensible a mayúsculas
  const caracter = frase[i].toLowerCase();
 
  // Verificar si el caracter es 'a'
  if (caracter === "a" ||caracter === "e"||caracter === "i"||caracter === "o"||caracter === "u") {
    
    contadorVocales++;
  }
  document.getElementById("out").innerHTML = contadorVocales;
}
}