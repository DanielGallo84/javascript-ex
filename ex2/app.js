var num1 =10;
var num2= 5;


function app() {

    let result = sum(num1,num2)

    document.getElementById("pantalla").textContent= ("la suma de " + num1 + " + " + num2 + " es " + result);  
}

app();
//console.log("la suma de " num1 " + " num2 " es " res);

function sum(n1,n2) {
    let result = n1 + n2
    return result
}