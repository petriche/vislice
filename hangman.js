let guessWord = 'minecraft';
let displayWord = '_'.repeat(guessWord.length);
let guessedLetters = [];
let lives = 10;

document.getElementById('word').innerText = displayWord;
document.getElementById('lives').innerText = `Lives: ${lives}`;

function makeGuess() {
    let guess = document.getElementById('guess').value.toLowerCase();
    document.getElementById('guess').value = '';
    if (!guessedLetters.includes(guess)) {
        guessedLetters.push(guess);
        if (guessWord.includes(guess)) {
            displayWord = guessWord.split('').map(char => guessedLetters.includes(char) ? char : '_').join('');
        } else {
            lives--;
        }
    }
    document.getElementById('word').innerText = displayWord;
    document.getElementById('lives').innerText = `Lives: ${lives}`;
    checkGameOver();
}

function checkGameOver() {
    if (lives <= 0) {
        document.getElementById('word').innerText = `Game Over! The word was ${guessWord}`;
    } else if (displayWord === guessWord) {
        document.getElementById('word').innerText = `Congratulations! You guessed the word ${guessWord}`;
    }
}