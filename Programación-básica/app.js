// debugger;
//Piedra, papel o tijera.

// Variables
let player = prompt('Cual es tu nombre?');
console.log(player)
const section = document.querySelector('section');
const title = document.querySelector('.title');

// Comprobación del nombre
while (player == "" || player == null) {
     player = prompt('Necesito tu nombre para poder continuar');
} 
title.innerHTML = `Hola! <br> <span style="font-size: 65px; color: lightseagreen">${player}</span> <br> Escoge una opción: `;

// Evento click
section.addEventListener('click', (e) => {
    toggleButton(e);
    sendMessage(e);
});

// Animación al presionar botón
const toggleButton = (e) => {
    let choice = e.target;
    if (choice.className === 'button') {
        choice.classList.toggle('buttonPressed');
    } else {
        let choice = e.target.parentElement;
        choice.classList.toggle('sectionPressed');
    } 
}

// Mensaje de confirmación
// debugger;
const sendMessage = (e) => {
    let choice = e.target;
    if (choice.className === 'button') {
        symbol = getSymbol(choice.firstChild)
        console.log(symbol)
        collectMessage(symbol)
        
    } else if(choice.className === 'emoji') {
        symbol = getSymbol(choice);
        console.log(symbol)
        collectMessage(symbol);
    } else {
        symbol = choice.previousElementSibling.id;
        console.log(symbol);
        collectMessage(symbol);
    }


    function getSymbol (element) {
        return element.id
    }
    function collectMessage (symbol) {
        if (symbol === 'piedra') {
            alert('Elegiste piedra 🪨');
        } else if (symbol === 'papel') {
            alert('Elegiste papel 📜');
        } else {
            alert('Elegiste tijera ✂️');
        }
    }
}

