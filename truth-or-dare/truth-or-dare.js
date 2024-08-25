const truths = [
    "What's the most embarrassing thing you've ever done?",
    "Have you ever lied to your best friend?",
    "What's your biggest fear?",
    "What's one thing you would change about yourself?",
    "What's a secret you've never told anyone?"
];

const dares = [
    "Dance with no music for one minute.",
    "Try to lick your elbow.",
    "Post an embarrassing photo on social media.",
    "Let someone give you a new hairstyle.",
    "Do your best impression of someone famous."
];

const truthCard = document.getElementById('truth-card');
const dareCard = document.getElementById('dare-card');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const prompt = document.getElementById('prompt');
const playAgainButton = document.getElementById('play-again-button');


function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function showResultScreen(resultText) {
    prompt.textContent = resultText;
    startScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
}

function showStartScreen() {
    startScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
}

truthCard.addEventListener('click', () => {
    showResultScreen(getRandomItem(truths));
});

dareCard.addEventListener('click', () => {
    showResultScreen(getRandomItem(dares));
});

playAgainButton.addEventListener('click', () => {
    showStartScreen();
});
