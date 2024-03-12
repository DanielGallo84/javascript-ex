function Comparacion() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    if (parseInt(numero1)>parseInt(numero2)) {
        document.getElementById("out").innerHTML = numero1 + " es mayor que " + numero2;
    } else { document.getElementById("out").innerHTML = numero2 + " es mayor que " + numero1;
    }
    
    
}