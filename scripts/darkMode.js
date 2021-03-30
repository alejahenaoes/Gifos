let body = document.getElementsByTagName("body")[0];
let darkOption = document.getElementById("btnNightMode");
let pageCtn = document.getElementsByClassName("pageContainer")[0];
let mainSection = document.getElementsByName("tittleHome")[0];
let footer = document.getElementsByClassName("footer")[0];
let iconSearch = document.getElementsByClassName("iconSearchActive")[0];
let lupa = document.getElementById("lupa");
let iconClose = document.getElementsByName("closeSearch")[0];
let cross = document.getElementById("cross");
let logoImgMob = document.getElementsByClassName("logoImg")[0];
let burguerMenu = document.getElementsByClassName("menu")[0];
let logoImgDes = document.getElementsByClassName("GifosLogo")[0];

darkOption.addEventListener("click", ()=>{
    pageCtn.classList.toggle("darkMode");
    darkOption.innerHTML= darkOption.innerHTML == "Modo Diurno" ? "Modo Nocturno" : "Modo Diurno";
    if (darkOption.innerHTML == "Modo Diurno"){
    searchSection[0].style.background = "#37383C";
    trendingSection[0].style.background = "#222326";
    footer.style.background = "#37383C";
    iconSearch.style.background = "transparent";
    lupa.src = "./assets/icon-search-mod-noc.svg";
    cross.src = "./assets/close-modo-noct.svg";
    logoImgMob.src = "./assets/logo-mobile-modo-noct.svg";
    burguerMenu.classList.toggle("darkMode");
    logoImgDes.src = "./assets/Logo-modo-noc.svg";
    
    }
    else{
        searchSection[0].style.background = "white";
        trendingSection[0].style.background = "#F3F5F8";
        footer.style.background = "white";
        logoImgMob.src = "./assets/logo-mobile.svg"
        logoImgDes.src = "./assets/logo-desktop.svg";
    }
    // mainSection.classList.toggle("dark-Mode");
    // allPage.classList.toggle("dark-mode");
})
// function changeBodyBg(){
//     // body.style.backgroundColor = "#37383C";
//     // document.body.style.background = color;
//     // document.getElementById("explicacion").style.color = color2;
//     // document.getElementById("date").style.color = color2;
//     // document.getElementById("results").style.color = color2;
//     // document.getElementById("titleMain").style.color = color2;
//     // document.getElementById("logo").src ="https://fontmeme.com/permalink/210304/da534ab0d3957077c289cc6250e5e6fa.png";
// }
// darkOption.addEventListener("click", ()=>{
//     changeBodyBg();
//     // alert("Hola")
// })

// let body_page = document.getElementsByTagName("body")[0];
// //Todo el body
// let line = document.getElementsByClassName("purpleRectangle");//Nodo de las lineas superior e inferior
// let logo = document.getElementsByClassName("logoImg");//Nodo del logo
// let burger_icon = document.getElementsByClassName("burguer-menu");//Nodo del menú hamburguesa
// let close_icon = document.getElementsByClassName("close-menu");//Nodo de cerrar el menú hamburguesa
// // let close_icon_fs = document.getElementById("close-full-screen");//Nodo de cerrar GIFO full screen 
// let night_mode = document.getElementById("btnNightMode");//nodo del Botón modo nocturno
// let page_container = document.getElementsByClassName("page-container");// nodo del contenedor de la pagina
// let btn_new_gifos = document.getElementsByClassName("btn-new-gifos-normal");//nodo del botón new gifo
// let btn_new_gifos_hover = document.getElementsByClassName("btn-new-gifos-hover");//nodo del botón new gifos Hover
// let btn_slider = document.getElementsByClassName("slider-icon");//nodo de botones de slider
// let btn_slider_fs = document.getElementsByClassName("slider-icon-fs");//nodo de botones slider full screen
// let btn_slider_hover = document.getElementsByClassName("slider-icon-hover");//nodo de botones de slider hover
// let btn_slider_hover_fs = document.getElementsByClassName("slider-icon-hover-fs");//nodo de botones slider hover full screen
// let search_icon = document.getElementsByClassName("search-icon");//nodo del icono de busqueda


// let small_camara_tape_img = document.getElementsByClassName("small-camara-tape-img")[0];
// let big_camara_tape_img = document.getElementsByClassName("big-camara-tape-img")[0];
// let camara_body_img = document.getElementsByClassName("camara-body-img")[0];
// let camara_tape_img = document.getElementsByClassName("camara-tape-img")[0];

// let twitter_icon_normal = document.getElementsByClassName("twitter-icon-normal")[0];
// let twitter_icon_hover = document.getElementsByClassName("twitter-icon-hover")[0];