// Ejercicio 1: Contar caracteres en un input
function contarCaracteres() {
  const texto = document.getElementById('texto').value;
  const contador = document.getElementById('contador');
  contador.textContent = `Caracteres: ${texto.length}`;
}

// Ejercicio 2: Mostrar números pares de 1 a N
function mostrarPares() {
  const input = document.getElementById('numero');
  const resultado = document.getElementById('resultado');
  const n = parseInt(input.value);

  if (isNaN(n) || n < 1) {
    resultado.textContent = 'Ingresa un número entero positivo.';
    return;
  }

  let pares = [];
  for (let i = 2; i <= n; i += 2) {
    pares.push(i);
  }

  resultado.textContent = `Números pares: ${pares.join(', ')}`;
}

// Ejercicio 3: Cambiar color de texto según elección
function cambiarColor() {
  const select = document.getElementById('colores');
  const texto = document.getElementById('texto-cambiar');
  texto.style.color = select.value;
}
