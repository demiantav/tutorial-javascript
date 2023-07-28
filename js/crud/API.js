const uri = "http://localhost:3000/productos";

export async function getProducts(){

    

    try {

        const res = await fetch(uri),
          productos = await res.json();

          return productos;
        
    } catch (error) {

        console.log(error);
        
    }
    
}

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