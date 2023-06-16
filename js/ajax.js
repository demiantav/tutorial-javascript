const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", e => {

    let data;
   
    if(xhr.readyState!==4) return; // Mediante esta validacion nos aseguramos que el codigo debajo solo se ejecute cuando el estado se complete (4)
    if(xhr.status >= 200 && xhr.status < 300){

        console.log("ok");
        data = xhr.responseText;
        const $arraydata = JSON.parse(data);
        console.log($arraydata);

    } else {
        
        console.log("no");
        console.log(xhr.responseText);
    }

    
})

xhr.open("GET","https://jsonplaceholder.typicode.com/users");

xhr.send();

