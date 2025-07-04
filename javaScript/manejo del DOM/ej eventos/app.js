//const boton = document.getElementById('boton'); 
const boton = document.querySelector('button')
const color = document.getElementById('color');

function generarColor() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';
    for (let i = 0; i < 6; i++) {
        let indice = Math.floor(Math.random() * 16);
        colorHex += digitos[indice];
    }
    return colorHex;
}

boton.addEventListener('click', function() {
    let colorAleatorio = generarColor();
    color.textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
});
