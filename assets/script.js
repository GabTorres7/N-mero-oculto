let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');
const body = document.body

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    attempts++;
    
    if (userGuess === secretNumber) {
        message.textContent = `Parabéns! Você acertou o número ${secretNumber} em ${attempts} tentativas!`;
        guessButton.disabled = true;
        resetButton.style.display = 'block';
        body.style.backgroundColor = "blue"
    } else if (userGuess < secretNumber) {
        message.textContent = 'Tente um número maior!';
    } else {
        message.textContent = 'Tente um número menor!';
    }

    guessInput.value = '';
});

resetButton.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    attempts = 0;
    message.textContent = '';
    guessInput.value = '';
    guessButton.disabled = false;
    resetButton.style.display = 'none';
    body.style.backgroundColor = "white"
});