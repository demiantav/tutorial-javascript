// El BOM  es un concepto mediante el cual se produce la interaccion entre Javascript y las ventanas de los navegadores, a diferencia del DOM con el cual interactuabamos con los elementos propios del documento o pagina web

// Tamaño del viewport donde se ve el contenido:

console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

// Tamaño de la ventana del navegador:

console.log(window.outerWidth);
console.log(window.outerHeight);

// Coordenada de la posicion en la que se encuentra la barra de scroll vertical (Tomando como referencia el top del viewport) Podemos hacer lo mismo para la barra horizontal pero con scrollX

console.log(window.scrollY);

// Objeto Location, es una interfaz con la cual se puede interactuar con informacion relacionada a las URLS, Windows y Document lo implementan 

console.log(location);

// Objeto History, es una interfaz que implementa el objeto windows mediante la cual podemos interactuar con el historial actual del navegador

console.log(history);

// Objeto Navigator, mediante esta interaz podemos interactuar con informacion relacionada al navegador y a datos del usuario que lo este utilizando, como por ejemplo la geolocalizacion, sistema operativo, etc:

console.log(navigator);


