// eventos

//elemento target

//trigger

//event handler
//funcion que se ejecuta cuando ocurre un evento


//event listener
//evento-funcion





/*const albahaca= document.getElementById('albahaca')

albahaca.addEventListener('click',mostrarClick);

function mostrarClick(e){
//console.log(e)
console.log(e.target.innerText)
}*/

//const toppings = document.getElementsByClassName('fondo-marron')

//const toppings = document.getElementsByTagName('li')

const toppings = document.querySelectorAll('.topping')
console.log(toppings);
function mostrar(e){
    //console.log(e.target.innerText)
}
for (const topping of toppings) {
        //console.log(topping)
        topping.addEventListener('click',(e)=>{
            console.log(e.target.innerText)
        }) 
}