//const apiKey = "api_key=y9Vum3HsDR775RvR5yVqbdDQ155aMeRX";
let suggestions = document.getElementsByClassName("searchBoxAutocomplete")
let imgSearch = document.getElementsByClassName("gifsSearch")
let titleSearch = document.getElementsByClassName("titleSearch")[0]
let searchSpace = document.getElementsByClassName("gifosSearch")
let suggestionsBar = document.getElementsByClassName("allSearch")
let searchBar = document.getElementsByClassName("input")
let activeSection = document.getElementsByClassName("active")
let normalSection = document.getElementsByClassName("iconSearch")
let closeIcon = document.getElementsByClassName("closeSearch")

let suggestionContentCtn = document.getElementsByClassName("suggestions");
let suggestionContent = document.getElementsByClassName("contentSugg");
let suggestionsCtn = document.getElementsByClassName("suggestionsCtn");
let searchInput = document.getElementsByClassName("input")[0];

function sendApiRequest(){
    let userInput = document.getElementById("input").value
    console.log(userInput)
    //Autocompletar
    let q = `q=${userInput}`;
    let Autocomplete = "https://api.giphy.com/v1/gifs/search/tags?"+q+"?&"+apiKey;
    fetch(Autocomplete)
    .then(response => response.json())
    .then(data => {
        for (let i=0; i<5; i++){
            let content = data.data[i].name;
            suggestionContent[i].textContent = content;
            console.log(data)
        }
        }) //Array con datos
    const searchApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&${apiKey}`
    fetch(searchApiURL).then(function(data){
        return data.json()
    })
        .then(function(json){
                for (let i=0; i < 12; i++){
                    console.log(json.data[i].images.fixed_height.url)//trae 12 gifs
                    let imgPath = json.data[i].images.fixed_height.url
                    let img = document.createElement("img")
                    img.setAttribute("src", imgPath)
                    imgSearch[i].appendChild(img) //pone img al ctn
                    img.id="imgGifSearch"+i; //se lo pone a la imagen
                    img.classList = "imgSearch"; //se lo pone a la imagen
                    titleSearch.innerHTML = userInput;
                    // document.body.appendChild(img)
                }
            }).catch(function(){
                    alert("Busqueda inválida")
            })
}


//Poder buscar con enter
searchBar[0].addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      sendApiRequest()
      searchSpace[0].style.display = "inline-block"
      suggestionsBar[0].style.height = "52px";
      suggestionsCtn[0].style.display = "none";
    }
  });
  //Funcionalidad de barra activa

searchBar[0].addEventListener("focus", () =>{
    activeSection[0].style.display = "flex";
    normalSection[0].style.display = "none";
    suggestionsBar[0].style.height = "257px"; //las sugerencias
    suggestionsCtn[0].style.display = "block"; //las sugerencias
})
//Limpieza SearchBar
closeIcon[0].addEventListener("focus", () =>{
    activeSection[0].style.display = "none";
    normalSection[0].style.display = "block";
    let inputValue = document.getElementById("input").value = "";
    searchSpace[0].style.display = "none"
    suggestionsBar[0].style.height = "52px";
    suggestionsCtn[0].style.display = "none"; //las sugerencias
})



