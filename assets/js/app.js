function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("all_display").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("all_display").style.display = "none";
}

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 7000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .7s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 2s";
            contador=0;
        },7050)
    }
}

$(document).on("scroll", function(){

    var action_actu = $(document).scrollTop();

    var caja = $("#text1");

    if(action_actu > 100){
        document.getElementById("text1").style.width = "80%";
    }

    if(action_actu < 100){
        document.getElementById("text1").style.width = "0px";
    }
});

function seconds(n) {
    if (n == 1) {
        document.getElementById("text_ln2").style.opacity = "0";
        document.getElementById("text_li2").style.opacity = "0";         
    }
    if (n == 2) {
        document.getElementById("text_fa2").style.opacity = "0";
        document.getElementById("text_li2").style.opacity = "0";        

    }
    if (n == 3) {
       document.getElementById("text_fa2").style.opacity = "0";
       document.getElementById("text_ln2").style.opacity = "0";
    }
}

function defined(a) {
    if (a == 1) {


        document.getElementById("text_fa2").style.opacity = "1";
        seconds(1)

    }

    if (a == 2) {


        document.getElementById("text_ln2").style.opacity = "1";
        seconds(2)

                            /*seconds*/   

    }  

    if (a == 3) {

       document.getElementById("text_li2").style.opacity = "1";
       seconds(3)

                            /*seconds*/  

    }  
}