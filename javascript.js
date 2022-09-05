
// TO DO:
// o resultado final vai embaixo


let playerSelection;
let computerSelection;
let matchResult;
let computerScore = 0;
let playerScore   = 0;

const resultContainer = document.querySelector('.result-container');

const result = document.createElement('div');
result.textContent = matchResult;
resultContainer.appendChild(result);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        matchResult = playRound(button.id);
        result.textContent = matchResult;
    });
})

function printScore () {
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.textContent = `${playerScore} vs ${computerScore}`;
}

function getComputerChoice () {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return 'rock';
    } else if (x === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function printChoices () {
    const playerChoice = document.querySelector('.playerChoice');
    playerChoice.textContent = playerSelection;
    
    const computerChoice = document.querySelector('.computerChoice');
    computerChoice.textContent = computerSelection;
}

function playRound (playerSelection) {
    if (playerScore >= 5) {
        const endResult = document.querySelector('.end-result');
        endResult.textContent = 'Congratulations! You Won!!!'
        return 
    } else if (computerScore >= 5) {
        const endResult = document.querySelector('.end-result');
        endResult.textContent = 'You Lost!'
        return
    }

    computerSelection = getComputerChoice();
    printChoices();
    
    // Draw
    if (playerSelection === computerSelection) return 'Draw'
    
    // Lose
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        printScore();
        return 'You Lose!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        printScore();
        return 'You Lose!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        printScore();
        return 'You Lose!';
    
    // Won
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        printScore();
        return 'You Won!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        printScore();
        return 'You Won!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        printScore();
        return 'You Won!';
    }
}