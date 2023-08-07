const uri = "http://localhost:3000/productos";


//GET
export async function getProducts(){

    try {

        const res = await fetch(uri),
          productos = await res.json();

          return productos;
        
    } catch (error) {

        console.log(error);
        
    }
    
}

//POST
export async function setProduct(product){

    try {

        await fetch(uri,{
            method: `POST`,
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }


        });

        window.location.href = "crud.html";
        
    } catch (error) {

        console.log(error);
        
    }
}

//PUT
export async function updateProduct(product,id){

    console.log(id.value);
    
    // console.log(product)

    try {

        await fetch(`http://localhost:3000/productos/${id.value}`,{
            method: `PUT`,
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }


        });

       
        
    } catch (error) {

        console.log(error);
        
    }
}


export async function deleteProduct(id){

    try {

        await fetch(`http://localhost:3000/productos/${id.value}`,{
            method: `DELETE`,
            headers: {
                "Content-Type": "application/json"
            }


        });

       
        
    } catch (error) {

        console.log(error);
        
    }


}