let playerSelection;
let result;

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

const container = document.querySelector('.container');

const content = document.createElement('div');
content.textContent = result;

container.appendChild(content);

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    playerSelection = btnRock.id;
    result = playRound(playerSelection);
    // console.log(result);
    content.textContent = result;
});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    playerSelection = btnRock.id;
    result = playRound(playerSelection);
    // console.log(result);
    content.textContent = result;
});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    playerSelection = btnRock.id;
    result = playRound(playerSelection);
    // console.log(result);
    content.textContent = result;
});

function playRound (playerSelection) {
    const computerSelection = getComputerChoice();
    // console.log('computer selection =',computerSelection);
    // console.log(`${playerSelection} vs ${computerSelection}`);

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