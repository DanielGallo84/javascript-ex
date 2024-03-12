
// const inputUsername = document.getElementById('input-username')
// const btnValidate = document.getElementById('btn-validate')
// const resultDisplay = document.getElementById('result-display');

// recuperar valor introducido por el usuario despues del click
// guardar el valor recuperado
// finalment imprimir en pantalla "hola <nombre de usuario>"
function app() {
   
//     btnValidate.addEventListener('click'), () => {
//          getElementById.username.value;
//          const button = document.querySelector("button");
//          button.addEventListener="click", function('validarNombre') {
//          const container = innerhtml.getElementById("username");
//         let username = input.value;
//           let message = 'Hello! ' + username;
         
//           document.getElementById("message").innerHTML = "¡Hola, " + nombre + "!"//= "Have a nice day!";
//  }
// }
    let name = document.getElementById("username").value;
    document.getElementById("message").innerHTML = "Hola! " + name;
    

    }
//         if (username == "") {
//             alert("Hello"+ username);
//             return false;
//           }
//         alert("Hello! " + nombre);
//         const resultElement = document.createElement('h2');
//         resultElement.textContent = "Hello! " + nombre;
//         const resultDisplay = document.getElementById('result-display');
//         resultDisplay.appendChild(resultElement);
//         //console.log(nombre);
// });
       
//     }
    

// }

// app()


// function validarNombre() {
//     // Obtener el valor del input
//     var nombre = document.getElementById("nombreUsuario").value;

//     // Verificar si se ingresó un nombre
//     if (nombre.trim() !== "") {
//       // Mostrar el mensaje
//       document.getElementById("mensaje").innerHTML = "¡Hola, " + nombre + "!";
//     } else {
//       // Si no se ingresó un nombre, mostrar un mensaje de error
//       document.getElementById("mensaje").innerHTML = "Por favor, ingrese un nombre válido.";
//     }
//   }
