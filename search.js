// const apiKey = "y9Vum3HsDR775RvR5yVqbdDQ155aMeRX";
function sendApiRequest(){
    let userInput = document.getElementById("input").value
    console.log(userInput)
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
const searchContainer = document.getElementsByClassName("searchResults");
