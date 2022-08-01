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

// console.log(getComputerChoice())

function playRound (playerSelection1, computerSelection1) {
    // Case-insensitive
    const playerSelection   = playerSelection1.toLowerCase();
    const computerSelection = computerSelection1.toLowerCase();

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

// Write a NEW function called game(). 
// Call the playRound function inside of this one to play a 5 round game
// that keeps score and reports a winner or loser at the end.

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice()
        const playerSelection   = prompt('Choose rock, paper or scissors').toLowerCase()
        
        console.log(`${playerSelection} vs ${computerSelection}`)
        console.log(playRound(playerSelection ,computerSelection))
    }
}