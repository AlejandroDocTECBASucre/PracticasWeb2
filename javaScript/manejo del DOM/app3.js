const listaToppings = document.getElementById('lista-toppings')
const toppings = document.querySelectorAll('.topping')

// Agregar botón de eliminar a cada topping existente
toppings.forEach((topping) => {
  const botonEliminar = document.createElement('button')
  botonEliminar.textContent = 'Eliminar'
  botonEliminar.style.marginLeft = '15px'
  botonEliminar.style.padding = '5px 10px'
  botonEliminar.style.backgroundColor = '#e74c3c'
  botonEliminar.style.color = 'white'
  botonEliminar.style.border = 'none'
  botonEliminar.style.borderRadius = '6px'
  botonEliminar.style.cursor = 'pointer'

  botonEliminar.addEventListener('click', () => {
    topping.remove()
  })

  topping.appendChild(botonEliminar)
})
