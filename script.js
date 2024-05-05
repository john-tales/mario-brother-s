const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascaraform")

function  cliqueiNoBotao(){
    form.style.left= "30%"
    form.style.transform= "translateX(50%)" 
    mascara.style.visibility= "visible"
}

function  cliqueiNaMascara(){
    form.style.left= "-300px"
    form.style.transform= "translateX(0)" 
    mascara.style.visibility= "hidden"
}
