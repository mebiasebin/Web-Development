document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const submitGuessButton = document.getElementById('submitGuess');
    const messageDisplay = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    
    let numberToGuess = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
        const userGuess = parseInt(guessInput.value);
        attempts++;
        attemptsDisplay.textContent = attempts;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            messageDisplay.textContent = 'Please enter a number between 1 and 100.';
            return;
        }

        if (userGuess === numberToGuess) {
            messageDisplay.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            submitGuessButton.disabled = true;
        } else if (userGuess < numberToGuess) {
            messageDisplay.textContent = 'Too low! Try again.';
        } else {
            messageDisplay.textContent = 'Too high! Try again.';
        }
    }

    submitGuessButton.addEventListener('click', checkGuess);
});
