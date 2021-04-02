//const apiKey = "api_key=y9Vum3HsDR775RvR5yVqbdDQ155aMeRX";
let favoriteSection = document.getElementsByClassName("favoritesSection")
let searchSection = document.getElementsByClassName("searchBoxMain")
let favOption = document.getElementById("favItem")
let myGifsSection = document.getElementsByClassName("myGifsSection")
let myOption = document.getElementById("myItem")
let createSection = document.getElementsByClassName("createSection")
let newGifOption = document.getElementById("newGif")
let trendingSection = document.getElementsByClassName("trendingSection")
let logo= document.getElementsByClassName("logo")[0];

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
let suggestionBox = document.getElementsByClassName("suggestion");
let suggestionContent = document.getElementsByClassName("contentSugg");
let suggestionsCtn = document.getElementsByClassName("suggestionsCtn");
let searchInput = document.getElementsByClassName("input")[0];


let card = document.getElementsByClassName("gifsSearch");
let cardTemplate = card[0];
let ctn = document.getElementsByClassName("gridTemplate");
let verMasBtn = document.getElementsByClassName("verMas")[0];


//Clonar template
let gifosResults = 0; //almacena el conteo
let limitGifos = 50;
function createCards(){
    let limitSup = gifosResults+12 <= limitGifos ? 12 : (limitGifos - gifosResults);
    for(let i=0; i<limitSup; i++){
        let boxTemplateSearch = (cardTemplate).cloneNode(true);
        (boxTemplateSearch).style.display = "inline-block";
        (ctn)[0].appendChild(boxTemplateSearch);
    }
    gifosResults = card.length;
}
window.onload = function(){
    ctn[0].removeChild(card[0]);
}

//variable que llame a  los de clase search[i]
function verMas(){
    // sendApiRequest();
    //nos permitirá saber el tope
    if(gifosResults == limitGifos){
        verMasBtn.style.display = "none";
    }
}
let gifsToAdd = 12;
verMasBtn.addEventListener("click", ()=>{
    verMas();
    gifsToAdd += 12; 
    sendApiRequest(gifsToAdd);
})


//variable para meter los que llevamos = 0
//con data.length


function sendApiRequest(limitSup){
    let userInput = document.getElementById("input").value
    console.log(userInput)
    createCards();
    const searchApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&${apiKey}`;
    fetch(searchApiURL).then(function(data){
        return data.json()
    })
        .then(function(json){
            limitSup = limitSup <= json.data.length ? limitSup : json.data.length;
                for (let i=0; i < limitSup; i++){
                    // console.log(json.data)
                    console.log(json.data[i].images.fixed_height.url)
                    let imgPath = json.data[i].images.fixed_height.url
                    imgSearch[i].setAttribute("src", imgPath)
                    imgSearch[i].id="imgGifSearch"+i; //se lo pone a la image
                    titleSearch.innerHTML = userInput;
                    let titleGif = document.getElementsByClassName("titleGifSearch");
                    let titleGifApi = json.data[i].title
                    titleGif[i].textContent = titleGifApi
                    let userGif = document.getElementsByClassName("userSearch");
                    let userGifApi =json.data[i].username;
                    userGif[i].textContent = userGifApi;
                }
            }).catch(function(){
                    alert("Busqueda inválida")
            })
}

//Autocompletar
function autocomplete(){
    let userInput = document.getElementById("input");
    if(userInput.value != ""){
        let q = `q=${userInput.value}`;
        let Autocomplete = "https://api.giphy.com/v1/gifs/search/tags?"+q+"?&"+apiKey;
        fetch(Autocomplete)
        .then(response => response.json())
        .then(datos => {
            for (let i=0; i < datos.data.length; i++){
                let content = datos.data[i].name;
                // console.log(content)
                suggestionContent[i].textContent = content;
                suggestionContent[i].style.display = "inline-block";
                //click suggestion
                suggestionBox[i].addEventListener("click", (event)=>{
                    let suggestionPath = event.path[1].innerText;
                    userInput.value = suggestionPath;
                    sendApiRequest(gifsToAdd);
                    removeSearch();
                    searchSpace[0].style.display = "inline-block";
                    suggestionsBar[0].style.height = "52px";
                    suggestionsCtn[0].style.display = "none";
                    // alert("Hola")
                })
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
//Eliminar busqueda anterior
function removeSearch(){
    for(let i = gifosResults-1;i >= 0;i--){
        (ctn)[0].removeChild(card[i]);
    }
    gifsToAdd = 12;
    gifosResults = 0;
    verMasBtn.style.display = "block";
}

//Poder buscar con enter
searchBar[0].addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        removeSearch();
        sendApiRequest(gifsToAdd);
        searchSpace[0].style.display = "inline-block";
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
logo.addEventListener("click", ()=>{
    searchSection[0].style.display = "block";
    trendingSection[0].style.display = "block";
    favoriteSection[0].style.display = "none";
    myGifsSection[0].style.display = "none";
    createSection[0].style.display = "none";
})
favOption.addEventListener("click", () =>{
    favoriteSection[0].style.display = "block";
    trendingSection[0].style.display = "block";
    searchSection[0].style.display = "none";
    myGifsSection[0].style.display = "none";
    createSection[0].style.display = "none";
})
myOption.addEventListener("click", () =>{
    myGifsSection[0].style.display = "block";
    trendingSection[0].style.display = "block";
    searchSection[0].style.display = "none";
    favoriteSection[0].style.display = "none";
    createSection[0].style.display = "none";
})
newGifOption.addEventListener("click", () =>{
    createSection[0].style.display = "flex";
    myGifsSection[0].style.display = "none"
    searchSection[0].style.display = "none";
    favoriteSection[0].style.display = "none";
    trendingSection[0].style.display = "none";
})

// let add_gifo_cards_finded = () => {
//     //verificamos que se hayan obtenido resultados en la busqueda
//     if(gifos_searched_array.length != 0){
//         search_without_result_container.style.display ="none";//ocultar contenedor de "sin resultados"
//         results_container.style.display = "block";//mostrar el container de resultados por si fue oculto en una acción anterior
//         see_more_button_search.style.display = "block";//mostrar el botón ver más por si fue oculto en una acción anterior
//         if(num_gifos_results <= gifos_searched_array.length){
//             //verificamos el valor final para el ciclo teniendo en cuenta que se deben agregar de a 12 gifos
//             //además, controlamos que en el utilmo ciclo no se vaya a pasar la longitud de los gifos encontrados por la API
//             let lim_sup = num_gifos_results+12 <= gifos_searched_array.length? 
//                 num_gifos_results+12: 
//                 num_gifos_results+(gifos_searched_array.length-num_gifos_results)
//             ;
//             for(let i=num_gifos_results; i<(lim_sup);i++){
//                 add_gifo_card(results_gifos_section,"gifo-searched",gifos_searched_array,i);
//             }
//             //la variable la igualamos al número de gifos cards agregados hasta el momento y será utilizado al ser llamada
//             //  de nuevo la función
//             num_gifos_results = gifos_box_searched.length;
//         }
//         //si llegó al ultimo gif ocultamos el botón ver más
//         if(gifos_searched_array.length == num_gifos_results){
//             see_more_button_search.style.display = "none";
//         }
//     }
//     else{//si no se obtuvo resultados se muestra el bloque de "sin resultados"
//         results_container.style.display = "none";
//         search_without_result_title.innerHTML = search_input[0].value;
//         search_without_result_container.style.display ="block";
//     }
// }





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
