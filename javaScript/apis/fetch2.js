// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => {
//     console.log("Usuarios:", data);
//   })
//   .catch(error => {
//     console.error("Hubo un error al consumir la API:", error);
//   });


  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(usuarios => {
    usuarios.forEach(usuario => {
      console.log(usuario.phone);
    });
  });
