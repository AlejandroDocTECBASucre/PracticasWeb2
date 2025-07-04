let valor = 0;
const contador  = document.getElementById('valor');

function incrementar() {
  valor++;
  contador.textContent = valor;
}

function decrementar() {
  if (valor > 0) {
    valor--;
    contador.textContent = valor;
  }
}
