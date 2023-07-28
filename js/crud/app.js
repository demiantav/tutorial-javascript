import { getProducts } from "./API.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
   
    showProducts();
    
})

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
           <td>${price}</td>
           `
        fragment.appendChild(rows);
        
        
        

        
        
    });

    $table.appendChild(fragment);


}