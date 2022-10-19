/*console.log("que haces");
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

const $enlaceDOM = document.querySelector(".enlace");
console.log($enlaceDOM.getAttribute("href"));
console.log($enlaceDOM); //Guardamos el enlace en una constante

$enlaceDOM.setAttribute("target", "_blank"); // De esta manera podemos añadir un nuevo atributo
*/

const $bodyDOM= (document.querySelector("body"));
const bodyStyles = window.getComputedStyle($bodyDOM); // Guardamos el listado de estilos de la etiqueta body y luego lo imprimimos, se genera un objeto llamado "CSSStyleDeclaration" (Unicamente de lectura):
console.log(bodyStyles);
console.log(bodyStyles.backgroundColor); // Imprimimos el valor de la propiedad background-color

//Otra forma mas facil es la siguiente:
console.log($bodyDOM.style); // Imprimimos el mismo objeto CSSStyleDeclaration
$bodyDOM.style.backgroundColor="hsl(194, 25%, 81%)"; //Modificamos el valor de la propiedad elegida

$bodyDOM.style.setProperty("color", "black"); // Otra manera de modificar propiedades

let varFont = getComputedStyle(document.documentElement).getPropertyValue("--font-title"); // De esta manera accedemos a una variable css

$bodyDOM.style.fontSize= varFont; // Y podemos asignarla a una propiedad que queramos

// Manejo de clases:

const $card = document.querySelector(".opciones");
const $lista = document.querySelector(".lista");
const $listaUl= document.querySelector(".lista-ul");

console.log($card);
console.log($card.classList);// Elemento con lista de clases
console.log($card.classList.contains("opciones")); // averiguamos si contiene determinada clase
$card.classList.add("cambiaColor");
$card.classList.toggle("rotate");


// Añadir elementos:

const $tarjetaLi= document.createElement("li");
const $textoLi= document.createTextNode("11");

$tarjetaLi.classList.add("opciones");
$tarjetaLi.appendChild($textoLi);

$listaUl.appendChild($tarjetaLi);
