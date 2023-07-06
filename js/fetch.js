export default function fetchPetition(){

    const d = document,
          $lista = d.querySelector(".list-fetch"),
          $fragment = d.createDocumentFragment();


    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {

        console.log(res);

        /*Validamos el estado de respuesta, si es ok y se encuentra en el rango entre 200 - 299 se resuelve la promesa y si no se rechaza*/

        return res.ok ? res.json() : Promise.reject(res);
    })
    .then(json => {

        json.forEach(element => {
            
            const $li = d.createElement("li");
            $li.textContent= `Username: ${element.username} - Website: ${element.website}`;
            $fragment.appendChild($li);
        
        })

        $lista.appendChild($fragment);

    })
    .catch(()=>{

        console.log("Aca paso algo che");
    })
    .finally();
}

export function fetchAsync(){

    const d = document,
          $lista = d.querySelector(".list-async"),
          $fragment = d.createDocumentFragment();

    
    async function getData(){

        try {

            let res = await fetch("https://jsonplaceholder.typicode.com/uers"),
                json = await res.json();

                if(!res.ok) throw new Error("Pago algo dentro del catch")

                json.forEach(element => {
            
                    const $li = d.createElement("li");
                    $li.textContent= `ID: ${element.id} - Name: ${element.name}`;
                    $fragment.appendChild($li);
                
                })
        
                $lista.appendChild($fragment);

            
        } catch (error) {

            console.log(error);
            
        } finally {}
    }


    getData();

}