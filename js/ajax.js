export default function ajaxPetition(){

    const xhr = new XMLHttpRequest(),
      d= document,
      $lista= d.querySelector(".list-ul"),
      $fragment = d.createDocumentFragment();

   xhr.addEventListener("readystatechange", e => {

      let data;
   
    if(xhr.readyState!==4) return; // Mediante esta validacion nos aseguramos que el codigo debajo solo se ejecute cuando el estado se complete (4)
    
    if(xhr.status >= 200 && xhr.status < 300){

        console.log("ok");
        data= xhr.responseText;
        let $arraydata = JSON.parse(data);
        console.log($arraydata);

        $arraydata.forEach( e => {

            const $li = d.createElement("li");
            $li.textContent= `${e.name} - ${e.email}`;
            $fragment.appendChild($li);
            
        })

        $lista.appendChild($fragment);

        

    } else {
        
        console.log("no");
        console.log(xhr.responseText);
    }

  
    
})

setTimeout( () => {

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();

}, 5000);


}




