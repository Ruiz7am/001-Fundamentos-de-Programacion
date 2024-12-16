// debugger;
// Titulo: Piedra, papel o tijera.
// Descripción: Juego de piedra, papel o tijera

// Variables

// let player = prompt('Cual es tu nombre?');
const playerName = prompt('Cual es tu nombre?')
console.log(playerName)
const section = document.querySelector('section');
const title = document.querySelector('.title');

// Comprobación del nombre
// while (player == "" || player == null) {
while (!playerName) {
    playerName = prompt('Necesito tu nombre para poder continuar');
} 
title.innerHTML = `Hola! <br> <span style="font-size: 40px; color: #94FF9B;">${playerName}</span> <br> Escoge una opción: `;

// Evento click
// section.addEventListener('click', (e) => {
section.addEventListener('click', (event) => {
    // se agrega linea (hecho por gi)
    const choice = getChoiceElement(event.target)
    if(choice) {
        handleChoice(choice);
        let playerChoice = choice.firstChild.id;
        animateButton(choice);
    }
});

function combat(playerChoice) {
    if (pcChoice === playerChoice) {
        alert('Empate');
    }
}

// -------------
// Obtener el elemento de opción
//
function getChoiceElement(target) {
    if(target.classList.contains('button')) {
        return target;
    }
    if (target.parentElement.classList.contains('button')) {
        return target.parentElement;
    }
    return null;
}
//
//
// -------------

// Animación al presionar botón
// const toggleButton = (e) => {
//     let choice = e.target;
//     if (choice.className === 'button') {
//         choice.classList.toggle('buttonPressed');
//     } else {
//         let choice = e.target.parentElement;
//         choice.classList.toggle('sectionPressed');
//     } 
// }
function animateButton(element) {
    element.classList.toggle('buttonPressed')
}


// Mensaje de confirmación
// const sendMessage = (e) => {
//     let choice = e.target;
//     if (choice.className === 'button') {
//         symbol = getSymbol(choice.firstChild)
//         console.log(symbol)
//         collectMessage(symbol)
        
//     } else if(choice.className === 'emoji') {
//         symbol = getSymbol(choice);
//         console.log(symbol)
//         collectMessage(symbol);
//     } else {
//         symbol = choice.previousElementSibling.id;
//         console.log(symbol);
//         collectMessage(symbol);
//     }


//     function getSymbol (element) {
//         return element.id
//     }
//     function collectMessage (symbol) {
//         if (symbol === 'piedra') {
//             alert('Elegiste piedra 🪨');
//         } else if (symbol === 'papel') {
//             alert('Elegiste papel 📜');
//         } else {
//             alert('Elegiste tijera ✂️');
//         }
//     }
// }
function handleChoice(element) {
    const symbol = element.id;
    alert(`Elegiste ${symbol} ${getEmoji(symbol)}`);
}


// -------------------
// Added by Github Copilot
// Obtener el emoji correspondiente
function getEmoji(symbol) {
    const emojis = {
        piedra: '🪨',
        papel: '🧻',
        tijera: '✂️'
    };
    return emojis[symbol] || '';
}
