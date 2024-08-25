const pregunta = document.getElementById("pregunta");

pregunta.innerText = "hola";

import truths from './truths.js';

function getRandomTruth() {
    const randomIndex = Math.floor(Math.random() * truths.length);
    return truths[randomIndex];
}

// Example usage:
console.log(getRandomTruth());
