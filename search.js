// const apiKey = "y9Vum3HsDR775RvR5yVqbdDQ155aMeRX";
function sendApiRequest(){
    let userInput = document.getElementById("input").value
    console.log(userInput)
    const searchApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&${apiKey}`
    fetch(searchApiURL).then(function(data){
        return data.json()
    })
        .then(function(json){
                for (let i=0; i < 10; i++){
                    console.log(json.data[i].images.fixed_height.url)
                    let imgPath = json.data[i].images.fixed_height.url
                    let img = document.createElement("img")
                    img.setAttribute("src", imgPath)
                    let container = document.getElementById("resultSearch")
                    container.appendChild(img)
                }
            }).catch(function(){
                    alert("Busqueda inválida")
            })
}
const searchContainer = document.getElementsByClassName("searchResults");
// let gifos = document.getElementsByClassName("gifosSearch");

// for(let i=0; i<numGifosSlider; i++){
//     let boxTemplate = gifo[0].cloneNode(true);
//     searchContainer[0].appendChild(boxTemplate);
//     gifo[i+1].style.display = "inline-block";
//     positionGifs.push(0);
// }
// window.onload = function(){
//     searchContainer[0].removeChild(gifos[0]);
// }