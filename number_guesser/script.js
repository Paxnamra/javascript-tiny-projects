let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 9);
};

function compareGuesses(humanGuess, computerGuess, number) {
    if (humanGuess !== computerGuess) {
        return ((number - humanGuess) > (number - computerGuess)) ? true : false;
    } else {
        return true;
    }
};

function updateScore(winner) {
    return (winner === 'human') ? humanScore++ : computerScore++;
  };

