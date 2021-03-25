//const apiKey = "api_key=y9Vum3HsDR775RvR5yVqbdDQ155aMeRX";
let suggestions = document.getElementsByClassName("searchBoxAutocomplete")
let imgSearch = document.getElementsByClassName("imgSearch")
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


let card = document.getElementsByClassName("gifsSearch");
let ctn = document.getElementsByClassName("gridTemplate");

//Clonar template
for(let i=0; i<12; i++){
    let boxTemplateSearch = (card)[0].cloneNode(true);
    boxTemplateSearch.classList.toggle("Search"+i);
    (ctn)[0].appendChild(boxTemplateSearch);
    (card)[i+1].style.display = "inline-block";
}
window.onload = function(){
    ctn[0].removeChild(card[0]);
}

function sendApiRequest(){
    let userInput = document.getElementById("input").value
    console.log(userInput)
    const searchApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&${apiKey}`
    fetch(searchApiURL).then(function(data){
        return data.json()
    })
        .then(function(json){
                for (let i=0; i < 12; i++){
                    // console.log(json.data)
                    console.log(json.data[i].images.fixed_height.url)//trae 12 gifs
                    let imgPath = json.data[i].images.fixed_height.url
                    imgSearch[i].setAttribute("src", imgPath)
                    imgSearch[i].id="imgGifSearch"+i; //se lo pone a la imagen
                    titleSearch.innerHTML = userInput;
                    let titleGif = document.getElementsByClassName("titleGifSearch");
                    let titleGifApi = json.data[i].title
                    titleGif[i].textContent = titleGifApi
                    let userGif = document.getElementsByClassName("userSearch");
                    let userGifApi =json.data[i].username;
                    userGif[i].textContent = userGifApi;
                    // let userGifo = gifo_response.data[i].username;
                    // userGif[i].textContent = userGifo;
                }
            }).catch(function(){
                    alert("Busqueda inválida")
            })
}

//Autocompletar
function autocomplete(){
    let userInput = document.getElementById("input").value
    if(userInput != ""){
        let q = `q=${userInput}`;
        let Autocomplete = "https://api.giphy.com/v1/gifs/search/tags?"+q+"?&"+apiKey;
        fetch(Autocomplete)
        .then(response => response.json())
        .then(datos => {
            for (let i=0; i < datos.data.length; i++){
                let content = datos.data[i].name;
                suggestionContent[i].textContent = content;
                // suggestionContent[i].id="sugg"+i;
                suggestionContent[i].style.display = "inline-block";
            }
            console.log(datos.data.length) //Array con datos
            })
            suggestionsBar[0].style.height = "257px"; //las sugerencias
            suggestionsCtn[0].style.display = "block"; //las sugerencias
    }else{
        suggestionsCtn[0].style.display = "none";
        suggestionsBar[0].style.height = "52px";
    }
}


//Poder buscar con enter
searchBar[0].addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      sendApiRequest()
      searchSpace[0].style.display = "inline-block"
      suggestionsBar[0].style.height = "52px";
      suggestionsCtn[0].style.display = "none";
    }else{ //presionando otra tecla diferente a enter
        autocomplete();
        // suggestionsBar[0].style.height = "257px"; //las sugerencias
        // suggestionsCtn[0].style.display = "block"; //las sugerencias
    }
  });
  //Funcionalidad de barra activa

searchBar[0].addEventListener("focus", () =>{
    activeSection[0].style.display = "flex";
    normalSection[0].style.display = "none";
    // suggestionsBar[0].style.height = "257px"; //las sugerencias
    // suggestionsCtn[0].style.display = "block"; //las sugerencias
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

//Opciones Menú
let favoriteSection = document.getElementsByClassName("favoritesSection")
let searchSection = document.getElementsByClassName("searchBoxMain")
let favOption = document.getElementById("favItem")
let myGifsSection = document.getElementsByClassName("myGifsSection")
let myOption = document.getElementById("myItem")

let logo= document.getElementsByClassName("logo")[0];
logo.addEventListener("click", ()=>{
    searchSection[0].style.display = "block";
    favoriteSection[0].style.display = "none";
    myGifsSection[0].style.display = "none"
})
favOption.addEventListener("click", () =>{
    favoriteSection[0].style.display = "block";
    searchSection[0].style.display = "none";
    myGifsSection[0].style.display = "none"
})
myOption.addEventListener("click", () =>{
    myGifsSection[0].style.display = "block"
    searchSection[0].style.display = "none";
    favoriteSection[0].style.display = "none";
})


// for(let i=0; i<(ciclode12); i++){
//     let boxTemplateSearch = (cardTemplate del html)[0].cloneNode(true);
//      boxTemplateSearch.classList.toggle("nombreEspecificoSearch");
//     (contenedorPadre)[0].appendChild(cardTemplate del html);
//     (cardTemplate del html)[i+1].style.display = "inline-block"; -> por defecto oculto
// }

//EVENTO A LOS CNT PARA QUE SU CONTENIDO SE PASE A SER EL VALUE DEL INPUT
//PONER IMG MAQUETEADAS Y SOLO CAMBIAR EL SRC


//1. Modificar el estilaje del gifo template por medio de una nueva clase
//2. Crear un ciclo que permita agregar solo 12 tarjetas
//3. en cada iteración agregar a gifcard template la clase que me modifica el estilo para search y favs y mis gifos
