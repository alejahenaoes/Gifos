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
let activeSection = document.getElementsByClassName("active")
let normalSection = document.getElementsByClassName("iconSearch")
searchBar[0].addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      sendApiRequest()
    }
  });
searchBar[0].addEventListener("focus", () =>{
    activeSection[0].style.display = "flex";
    normalSection[0].style.display = "none";

})

const sugerencias = document.getElementsByClassName("sugerencias");

let searchInput = document.getElementsByClassName("input")[0];

// searchSinContenido.classList.add('activeSection');
//     trendingSection.classList.remove('desactiveSection');

// search_input[0].addEventListener("focus", () =>{
//     search_icon_active[0].style.display = "block";
//     search_box[0].style.borderBottom =  "1px solid #9CAFC3";
//     search_icon[0].style.display = "none";
//     close_suggest_icon.style.display = "block";
//     suggest_box[0].style.display = "block";
// });