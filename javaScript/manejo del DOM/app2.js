// const primerTopping = document.querySelector('.topping')
// console.log(primerTopping.style)


// primerTopping.style.backgroundColor='green'
// primerTopping.style.boxShadow='3px 3px 3px red'

// primerTopping.style.textTransform = 'uppercase'


// const listaToppings =document.getElementById('lista-toppings')
// console.log(listaToppings)

// console.log(listaToppings.innerText)

// console.log(listaToppings.textContent)

// console.log(listaToppings.innerHTML)




// const titulo =document.getElementById('titulo')

// titulo.innerText= 'cambio de toopingsdsd'


// const enlaces = document.getElementsByTagName('a')
// console.log(enlaces[0].getAttribute('href'))

//console.log(enlaces[0].removeAttribute('href'))

// console.log(enlaces[0].setAttribute('href','https://talkenglish.tecbasucreacad.com/'))
// console.log(enlaces[0].getAttribute('href'))

const primerTopping = document.querySelector('.topping')

// primerTopping.classList.add('texto-verde')

// console.log(primerTopping.classList)

 //primerTopping.classList.remove('topping')

 const listaToppings = document.getElementById('lista-toppings')

const toppingNuevo = document.createElement('li')

toppingNuevo.classList.add('topping','fondo-marron')
 toppingNuevo.innerText='doble queso'

 listaToppings.append(toppingNuevo)


 toppingNuevo.remove()



