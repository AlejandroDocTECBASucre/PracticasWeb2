function cambiarTema() {
  const cuerpoPagina = document.getElementsByTagName('body')[0];

  if (cuerpoPagina.className === 'oscuro') {
    cuerpoPagina.className = '';
  } else {
    cuerpoPagina.className = 'oscuro';
  }
}
