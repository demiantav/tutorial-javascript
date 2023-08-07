import { deleteProduct, getProducts, setProduct, updateProduct } from "./API.js";

const d = document;

// Mostramos los productos en la tabla: GET

d.addEventListener("DOMContentLoaded", e => {
   
    showProducts();
    
})

// Creamos un producto y lo añadimos a nuestra base: POST

d.querySelector(".product-form").addEventListener("submit", e => {
    
    const id = d.querySelector(".hidden");

     
     e.preventDefault();

     if(id.value === ""){

        createProduct();


     } else {

        editProduct();
     }
     

});

d.addEventListener("click", e => {

    let name = d.getElementById("name"),
              price = d.getElementById("price"),
              marca= d.getElementById("marca"),
              hidden= d.querySelector(".hidden");

    if(e.target.matches(".editar")){

        

              name.value= e.target.dataset.name;
              price.value= e.target.dataset.price;
              marca.value= e.target.dataset.marca;
              hidden.value= e.target.dataset.id;

    }

    if(e.target.matches(".eliminar")){

              hidden.value= e.target.dataset.id;

              deleteProduct(hidden);

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
           <button type="button" class="btn eliminar" data-id= ${id} data-name= ${name} data-marca= ${marca} data-price= ${price}>Eliminar</button>
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

//PUT
const editProduct = () => {

    let product;

        const name = d.getElementById("name"),
              price = d.getElementById("price"),
              marca= d.getElementById("marca"),
              hidden= d.querySelector(".hidden");

              product = {
                name: name.value,
                price: price.value,
                marca: marca.value
              }
    

    updateProduct(product,hidden);

}

//DELETE







