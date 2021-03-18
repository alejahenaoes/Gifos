//const apiKey = "api_key=y9Vum3HsDR775RvR5yVqbdDQ155aMeRX";
function sendApiRequest(){
    let userInput = document.getElementById("input").value
    console.log(userInput)
    //Autocompletar
    let q = `q=${userInput}`;
    let Autocomplete = "https://api.giphy.com/v1/gifs/search/tags?"+q+"?&"+apiKey;
    fetch(Autocomplete)
    .then(response => response.json())
    .then(data => console.log(data)) //Array con datos
    //resultados
    const searchApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&${apiKey}`
    fetch(searchApiURL).then(function(data){
        return data.json()
    })
        .then(function(json){
                for (let i=0; i < 12; i++){
                    console.log(json.data[i].images.fixed_height.url)
                    let imgPath = json.data[i].images.fixed_height.url
                    let img = document.createElement("img")
                    img.setAttribute("src", imgPath)
                    // let container = document.getElementById("resultSearch")
                    document.body.appendChild(img)
                }
            }).catch(function(){
                    alert("Busqueda inválida")
            })
}
//Poder buscar con enter
let searchBar = document.getElementsByClassName("input")
searchBar[0].addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      sendApiRequest()
    }
  });

const sugerencias = document.getElementsByClassName("sugerencias");

let searchInput = document.getElementsByClassName("input")[0];

