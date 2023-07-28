export async function getProducts(){

    const uri = "http://localhost:3000/productos";

    try {

        const res = await fetch(uri),
          productos = await res.json();

          return productos;
        
    } catch (error) {

        console.log(error);
        
    }
    
}