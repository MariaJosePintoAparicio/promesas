const contenedor = document.getElementById('contenedor');
const lsttoppings = document.getElementById('lista-toppings');
const titulo = document.getElementById('titulo');
const toppings = document.getElementsByClassName('topping')
const mistoppings = document.getElementsByClassName('li');

console.log(titulo.innerHTML);
titulo.innerHTML = '😁 sabados felices '

titulo.textContent = '😁 sabados <i>felices</i>'
console.log(titulo.tagName);

console.log(toppings)
console.log(toppings.length)
console.log(toppings[0])

const toppingsArray = Array.from(toppings);
toppingsArray.forEach(topping => {
    console.log(topping.textContent)
});

toppingsArray.forEach(topping => {
    console.log(`${topping.textContent}  -  ${topping.id} - ${topping.classList}`);
});
