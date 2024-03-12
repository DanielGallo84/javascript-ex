function Suma() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let result = parseFloat(numero1) + parseFloat(numero2);
    document.getElementById("out").innerHTML = "La suma de " + numero1 + " con " + numero2 + " es: "  + result;
}