const notas = [];
const lista = document.getElementById('lista-notas');
const resultado = document.getElementById('resultado');

function agregarNota() {
  const input = document.getElementById('nota');
  const valor = parseFloat(input.value);

  if (!isNaN(valor) && valor >= 0 && valor <= 100) {
    notas.push(valor);

    const li = document.createElement('li');
    li.textContent = `Nota: ${valor}`;
    lista.appendChild(li);

    input.value = '';
    resultado.textContent = '';
  } else {
    alert("Ingresa una nota válida entre 0 y 100.");
  }
}

function calcularPromedio() {
  if (notas.length === 0) {
    resultado.textContent = "No hay notas para calcular.";
    return;
  }

  const suma = notas.reduce((acc, val) => acc + val, 0);
  const promedio = suma / notas.length;

  resultado.textContent = `Promedio: ${promedio.toFixed(2)} - ${promedio >= 51 ? 'Aprobado ✅' : 'Reprobado ❌'}`;
}
