const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", e => {
   
    if(xhr.readyState!==4) return; // Mediante esta validacion nos aseguramos que el codigo debajo solo se ejecute cuando el estado se complete (4) -------
    if(xhr.status >= 200 && xhr.status < 300){

        console.log("ok");
        let data = xhr.responseText;
        console.log(JSON.parse(data));
    } else {

        console.log("no");
        console.log(xhr.responseText);
    }

    console.log(xhr);
})

xhr.open("GET","https://jsonplaceholder.typicode.com/users");

xhr.send();
