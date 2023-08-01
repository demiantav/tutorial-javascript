import { getProducts, setProduct } from "./API.js";

const d = document;

// Mostramos los productos en la tabla: GET

d.addEventListener("DOMContentLoaded", e => {
   
    showProducts();
    
})

// Creamos un producto y lo añadimos a nuestra base: POST

d.querySelector(".product-form").addEventListener("submit", e => {
    
    e.preventDefault();
    createProduct();

});

//Editamos un producto ya cargado en la base: PUT

d.addEventListener("click", e => {

    if(e.target.matches(".editar")){

        d.getElementById("name").value= e.target.dataset.name;
        d.getElementById("price").value= e.target.dataset.price;
        d.getElementById("marca").value= e.target.dataset.marca;

        
    }
})



//Funciones:


//GET
const showProducts = async () => {

    let fragment = d.createDocumentFragment(),
        $table = d.querySelector(`.cuerpo-tabla`);

    console.log("Activo");
    const products = await getProducts();

    products.forEach(product => {

        const {id, name, price, marca} = product;

        const rows = d.createElement(`tr`);
              

        rows.innerHTML =
          `<th>${id}</th>
           <td>${name}</td>
           <td>${marca}</td>
           <td>$ ${price}</td>
           <td>
           <button type="button" class="btn editar" data-id= ${id} data-name= ${name} data-marca= ${marca} data-price= ${price}>Editar</button>
           <button type="button" class="btn eliminar" data-id= ${id}>Eliminar</button>
           </td>
           `
        fragment.appendChild(rows);
        
    });

    $table.appendChild(fragment);


}

//POST
const createProduct = async () => {

    const name = d.getElementById("name").value,
          price = d.getElementById("price").value,
          marca = d.getElementById("marca").value


    const product = {
        name,
        price,
        marca
    }

    await setProduct(product);
}

const editProduct = () => {

    
}





