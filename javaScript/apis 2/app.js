const API_URL = 'https://jsonplaceholder.typicode.com/users';

document.getElementById('formCrear').addEventListener('submit', (e) => {
  e.preventDefault();

  const nuevoUsuario = {
    name: document.getElementById('nombre').value,
    email: document.getElementById('email').value
  };

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(nuevoUsuario),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log('Usuario creado:', data);
    alert(`Usuario creado con ID: ${data.id}`);
  });
});