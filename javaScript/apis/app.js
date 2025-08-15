// URL de la API
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Obtener el cuerpo de la tabla
const tbody = document.querySelector('#tablaUsuarios tbody');

// Función para mostrar usuarios en la tabla
function mostrarUsuarios(usuarios) {
  usuarios.forEach(usuario => {
    // Crear la fila
    const fila = document.createElement('tr');

    // Celda para el nombre
    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = usuario.name;
    fila.appendChild(celdaNombre);

    // Celda para el email
    const celdaEmail = document.createElement('td');
    celdaEmail.textContent = usuario.email;
    fila.appendChild(celdaEmail);

    // Celda para la ciudad
    const celdaCiudad = document.createElement('td');
    celdaCiudad.textContent = usuario.address.city;
    fila.appendChild(celdaCiudad);

    // Agregar la fila al cuerpo de la tabla
    tbody.appendChild(fila);
  });
}

// Llamada a la API usando fetch
fetch(API_URL)
  .then(res => {
    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }
    return res.json();
  })
  .then(data => mostrarUsuarios(data))
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });
