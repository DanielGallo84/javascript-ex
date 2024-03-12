function Frase(){
//let frase= document.getElementById("frase").value;
// Solicitar al usuario que ingrese una frase
let frase = document.getElementById("fraseInput").value;

// Contador para la letra 'a'
let contadorA = 0;

// Recorrer cada caracter de la frase
for (let i = 0; i < frase.length; i++) {
  // Convertir el caracter a minúscula para hacer la comparación insensible a mayúsculas
  const caracter = frase[i].toLowerCase();
  

  // Verificar si el caracter es 'a'
  if (caracter === 'a') {
   contadorA++;
    
  }
}
// Mostrar el resultado
document.getElementById("out").innerHTML = ("la letra a aparece " + contadorA + " veces.");
}
