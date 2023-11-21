function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']

    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
    
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock.';
    } else return "It's a tie! Take another round."
    
}

playRound('SCiSsOrS', getComputerChoice())