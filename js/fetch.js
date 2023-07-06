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
            $li.textContent(`${element.adress} - ${element.phone}`);
            $fragment.appendChild($li);
        
        })

        $lista.appendChild($fragment);

    })
    .catch(()=>{

        console.log("Aca paso algo che");
    })
    .finally();
}