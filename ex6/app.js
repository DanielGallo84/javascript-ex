function Mayor() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let numero3 = document.getElementById("num3").value;
    let result =  Math.max(numero1, numero2, numero3);
    document.getElementById("out").innerHTML = "El número más grande es " + result;
    
    
}