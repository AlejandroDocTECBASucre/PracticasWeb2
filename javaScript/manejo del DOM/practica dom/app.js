const carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const totalElemento = document.getElementById('total');

function agregarAlCarrito(nombre, precio) {
  const producto = { nombre, precio };
  carrito.push(producto);
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  listaCarrito.innerHTML = '';
  let total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.style.marginLeft = '10px';
    btnEliminar.style.backgroundColor = '#e74c3c';
    btnEliminar.style.border = 'none';
    btnEliminar.style.color = 'white';
    btnEliminar.style.padding = '5px 10px';
    btnEliminar.style.borderRadius = '4px';
    btnEliminar.onclick = () => eliminarDelCarrito(index);

    li.appendChild(btnEliminar);
    listaCarrito.appendChild(li);
    total += item.precio;
  });

  totalElemento.textContent = `Total: $${total}`;
}
