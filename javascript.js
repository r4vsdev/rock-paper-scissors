let playerSelection;
let matchResult;
let computerScore = 0;
let playerScore   = 0;

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

const historyContainer = document.querySelector('.history-container');

const result = document.createElement('div');
result.textContent = matchResult;
historyContainer.appendChild(result);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    matchResult = playRound(button.id);
    console.log(matchResult);
    result.textContent = matchResult;
    });
})

// escolhe o scoreaboard-container e poe o placar ao vivo
const scoreContainer = document.querySelector('.score-container');

const playerScoreDiv = document.createElement('div')
playerScoreDiv.textContent = 'test';
scoreContainer.appendChild(playerScoreDiv);

function playRound (playerSelection) {
    if (playerScore >= 5 || computerScore >= 5) {return }

    const computerSelection = getComputerChoice();
    // console.log('computer selection =',computerSelection);
    // console.log(`${playerSelection} vs ${computerSelection}`);

    // Draw
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Draw! You both chose rock';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Draw! You both chose paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Draw! You both chose scissors';
    
    // Lose
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    
    // Won
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    
}

function playGame (playerSelection) {
    
}