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

const element = document.querySelector("#main-input")

element.placeholder = "Agora é esse texto"
console.log(element.placeholder)

