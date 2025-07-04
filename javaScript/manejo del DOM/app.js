const contenedor = document.getElementById('contenedor')

console.log(contenedor)

console.log( contenedor.innerHTML)
const titulo = document.getElementById('titulo')
console.log( titulo.innerText)
console.log(titulo.tagName)



const todosTopings = document.getElementsByTagName('li')
console.log(todosTopings)

const toppingsMarron = document.getElementsByClassName('fondo-marron')
console.log(toppingsMarron)



const aceituna = document.querySelector('#aceitunas')
console.log(aceituna)

const aceituna2 = document.querySelector('.topping')
console.log(aceituna2)


const aceituna3 = document.querySelector('.topping.fondo-naranja')
console.log(aceituna3)


const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja')
console.log(toppingsNaranja)
