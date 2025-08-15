fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(res => {
    if (res.status === 200) {
      return res.json();
    } else if (res.status === 404) {
      throw new Error("Producto no encontrado");
    }
  })
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
