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
