let playerSelection;
let result;
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

const container = document.querySelector('.result-container');

const content = document.createElement('div');
content.textContent = result;
container.appendChild(content);

// const content2 = document.createElement('div');
// content2.textContent = 'Score Board:';
// container.appendChild(content2);

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
    if (playerScore === 5 || computerScore === 5) {return }

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