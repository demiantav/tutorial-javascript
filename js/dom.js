console.log("que haces");
console.log(document.body);
console.log(document.head);
console.log(document.scripts);

console.log(document.getElementsByClassName("buscar"));
console.log(document.getElementById("articulo"));

//Estos dos metodos de seleccion actualmente no se utilizan tanto y en su lugar se usa el siguiente:

console.log(document.querySelector(".buscar"));
console.log(document.querySelector("#articulo"));

//Para seleccionar todos los elementos podemos usar:
console.log(document.querySelectorAll(".opciones"));
console.log(document.querySelectorAll(".opciones")[2]); // Seleccionamos el tercer elemento de clase "opciones"

// Interactuar con atributos

console.log(document.documentElement.lang); //accedemos al atributo lang del html

console.log(document.querySelector(".enlace").href);

document.querySelector(".enlace").href= "https://www.facebook.com"; // De esta manera modificamos la direccion href

const $enlaceDOM = document.querySelector(".enlace"); //Guardamos el enlace en una constante

$enlaceDOM.setAttribute("target", "_blank"); // De esta manera podemos añadir un nuevo atributo

