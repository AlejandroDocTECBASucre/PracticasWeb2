const boton = document.getElementById('boton');
const color = document.getElementById('color');
const historial = document.getElementById('historial');
const limpiar = document.getElementById('limpiar');

function generarColor() {
  const digitos = '0123456789ABCDEF';
  let colorHex = '#';
  for (let i = 0; i < 6; i++) {
    let indice = Math.floor(Math.random() * 16);
    colorHex += digitos[indice];
  }
  return colorHex;
}

boton.addEventListener('click', () => {
  const colorAleatorio = generarColor();
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;

  // Crear item en historial
  const item = document.createElement('li');
  item.textContent = colorAleatorio;
  item.style.borderLeftColor = colorAleatorio;

  // Al hacer clic, copiar color
  item.addEventListener('click', () => {
    navigator.clipboard.writeText(colorAleatorio);
    alert(`Color ${colorAleatorio} copiado al portapapeles`);
  });

  historial.appendChild(item);

  // Estilo dinámico del botón
  boton.style.boxShadow = `0 0 10px ${colorAleatorio}`;
  boton.style.borderColor = colorAleatorio;
});

limpiar.addEventListener('click', () => {
  historial.innerHTML = '';
});
