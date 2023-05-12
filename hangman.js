let guessWord = 'minecraft';
let displayWord = '_ '.repeat(guessWord.length).trim();
let guessedLetters = [];
let lives = 10;

// Array of hangman parts
let hangmanParts = ['hang1', 'hang2', 'hang3', 'hang4', 'head', 'body', 'leftarm', 'rightarm', 'leftleg', 'rightleg'];

document.getElementById('word').innerText = displayWord;
document.getElementById('lives').innerText = `Lives: ${lives}`;

function makeGuess() {
    let guess = document.getElementById('guess').value.toLowerCase();
    document.getElementById('guess').value = '';
    if (!guessedLetters.includes(guess)) {
        guessedLetters.push(guess);
        if (guessWord.includes(guess)) {
            displayWord = guessWord.split('').map(char => guessedLetters.includes(char) ? char : '_').join(' ');
        } else {
            lives--;
            showHangman();
        }
    }
    document.getElementById('word').innerText = displayWord;
    document.getElementById('lives').innerText = `Lives: ${lives}`;
    checkGameOver();
}

function showHangman() {
    let partsToShow = hangmanParts.slice(0, 10 - lives);
    for (let part of partsToShow) {
        document.getElementById(part).style.visibility = 'visible';
    }
}

function checkGameOver() {
    if (lives <= 0) {
        document.getElementById('word').innerText = `Game Over! The word was ${guessWord}`;
    } else if (displayWord.replace(/ /g, '') === guessWord) {
        document.getElementById('word').innerText = `Congratulations! You guessed the word ${guessWord}`;
    }
}
