let position_gifs = []; 
let boxes_contianer = document.getElementsByClassName("boxes-container");
let gifo = document.getElementsByClassName("gifos");

for (let i=0; i<10; i++){
    let box_template = gifo[0].cloneNode(true); //que clone tal cual el contenedor del gif con hover y todo
    boxes_contianer[0].appendChild(box_template);
    gifo[i+1].style.display = "inline-block";
    position_gifs.push(0);
}
//Luego eliminar el gif template
window.onload = function(){
    boxes_contianer[0].removeChild(gifo[0]);
}