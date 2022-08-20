let playerSelection;
// let computerSelection;

const btnRock = document.querySelector('.buttonRock');
btnRock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound(playerSelection);
});

const btnPaper = document.querySelector('.buttonPaper');
btnPaper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection);
    
});

const btnScissors = document.querySelector('.buttonScissors');
btnScissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection);
});

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

function playRound (playerSelection) {
    const computerSelection = getComputerChoice();
    console.log('computer selection =',computerSelection);
    console.log(`${playerSelection} vs ${computerSelection}`);

    // Draw
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Draw';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Draw';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Draw';
    
    // Lose
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    
    // Won
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    
}