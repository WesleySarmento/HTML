/*
getElementsById -> Trás UM elemento pelo ID
getElementsByClassName -> Trás TODOS os elementos com essa classe
getElementsByTagName -> Trás TODOS os elementos com essa TAG
getElementsByName -> Trás TODOS os elementos com esse NAME

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar


Alterando e Acessando textos

textContent -> Só HTML
innerText -> Conteúdo sem HTML (apenas texto) leva em conta o CSS


*/

/* const button = document.querySelector(".main-button")
button.style.color = "#852394"
button.style.backgroundColor = "white"

*/
const input = document.querySelector("#main-input")

const button = document.querySelector("h1")
button.style.fontSize = "100px"




function cliqueiNoBotao(){
    alert(input.value)
}


function digiteiNoInput(){
    console.log(input.value)
}

