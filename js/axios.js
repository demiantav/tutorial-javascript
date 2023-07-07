export default function axiosPetition(){

    const d = document,
          $lista = d.querySelector(".list-axios"),
          $fragment = d.createDocumentFragment();
          
    async function getDataAxios(){
        
        try {

            const res = await axios.get("https://jsonplaceholder.typicode.com/users");

            console.log(res)

            res.data.forEach((element) => {

                const $li = d.createElement("li");
                    
                $li.textContent= `ID: ${element.id} - Name: ${element.name}`;
                $fragment.appendChild($li);
            })

            $lista.appendChild($fragment);
            
        } catch (error) {

            console.log("Dentro del catch:", error.response);
            
        }


    }


    getDataAxios();
}