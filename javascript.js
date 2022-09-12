// TO DO:
// replace the words on the choices container for symbols

let playerSelection;
let computerSelection;
let matchResult;
let computerScore = 0;
let playerScore   = 0;
let roundExplanation;

function showGameResult () {
    if (playerScore >= 5) {
        const endResult = document.querySelector('.end-result');
        endResult.textContent = 'Congratulations! You Won!!!';
        endResult.style.color = 'green';
        
        return 'Congratulations! You Won!!!';
    }
    if (computerScore >= 5) {
        const endResult = document.querySelector('.end-result');
        endResult.textContent = 'You Lost!';
        endResult.style.color = 'red';
       
        return 'You Lost!';
    }
}

function printScore () {
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.textContent = `${playerScore} x ${computerScore}`;
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
    let playerSymbol;
    if (playerSelection === 'rock')     playerSymbol = '✊';
    if (playerSelection === 'paper')    playerSymbol = '✋';
    if (playerSelection === 'scissors') playerSymbol = '✌️';
    let computerSymbol;
    if (computerSelection === 'rock')     computerSymbol = '✊';
    if (computerSelection === 'paper')    computerSymbol = '✋';
    if (computerSelection === 'scissors') computerSymbol = '✌️';

    const playerChoice = document.querySelector('.playerChoice');
    playerChoice.textContent = playerSymbol;
    
    const computerChoice = document.querySelector('.computerChoice');
    computerChoice.textContent = computerSymbol;
}

function playRound (playerSelection) {
    if (playerScore >= 5) return
    if (computerScore >= 5) return

    computerSelection = getComputerChoice();
    printChoices();
        
    // Draw
    if (playerSelection === computerSelection) {
        roundExplanation = `You both chose ${playerSelection}!`

        return 'Draw';
    } 
    // Lose
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        printScore();
        roundExplanation = `${computerSelection} beats ${playerSelection}!`;
        showGameResult();

        return 'You Lose!';

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        printScore();
        roundExplanation = `${computerSelection} beats ${playerSelection}!`;
        showGameResult();
        
        return 'You Lose!';

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        printScore();
        roundExplanation = `${computerSelection} beats ${playerSelection}!`;
        showGameResult();
        
        return 'You Lose!';
    
    // Won
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        printScore();
        roundExplanation = `${playerSelection} beats ${computerSelection}!`;
        showGameResult();

        return 'You Won!';

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        printScore();
        roundExplanation = `${playerSelection} beats ${computerSelection}!`;
        showGameResult();

        return 'You Won!';

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        printScore();
        roundExplanation = `${playerSelection} beats ${computerSelection}!`;
        showGameResult();

        return 'You Won!';
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        matchResult = playRound(button.id);
        
        const resultContainer = document.querySelector('.result-container');
        resultContainer.textContent = matchResult;

        const explanationMessage = document.querySelector('.explanation');
        explanationMessage.textContent = roundExplanation;
    });
})