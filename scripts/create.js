let textCtn = document.getElementsByClassName("inner")[0];
let videoCtn = document.getElementsByClassName("camStream")[0];
let startBtn = document.getElementById("startBtn");

function accessCam (){
    navigator.mediaDevices.getUserMedia({
        // devuelve promesa
        audio: false, 
        // sin audio
        video: {
           height: { max: 480 }
        }
        // medidas para el video
     })
     .then(responsesStream =>{
        showRecElements(responsesStream);
     })
}

let showRecElements = (stream)=>{
    videoCtn.srcObject = stream;
    videoCtn.play();
}

startBtn.addEventListener("click", ()=>{
    accessCam();
})