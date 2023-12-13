function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose! Paper beats Rock.')
        return 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose! Rock beats Scissors.')
        return 'You lose! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose! Scissors beats Paper.')
        return 'You lose! Scissors beats Paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win! Rock beats Scissors.')
        return 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You win! Scissors beats Paper.')
        return 'You win! Scissors beats Paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win! Paper beats Rock.')
        return 'You win! Paper beats Rock.';
    } else if (playerSelection === computerSelection) alert("It's a tie! Take another round.");
        return "It's a tie! Take another round.";
    
}

function getPlayerChoice() {
    let playerchoice = prompt('Rock, paper, scissors: ');
    if (playerchoice === '' || playerchoice === null) {
        alert('Try again!');
        return
    }

    playerchoice = playerchoice.toLowerCase();
    if (!(playerchoice === 'rock' || playerchoice === 'paper' || playerchoice === 'scissors')) {
        alert('Try again!');
        return
    }
    
    return playerchoice;
}

function game() {
    let playerwins = 0;
    let computerwins = 0;

    let result = playRound(getPlayerChoice(), getComputerChoice());
    if (result.slice(4,6) === 'wi') {
        playerwins++
    } else if (result.slice(4,6) === 'lo') {
        computerwins++
    }
    
    result = playRound(getPlayerChoice(), getComputerChoice());
    if (result.slice(4,6) === 'wi') {
        playerwins++
    } else if (result.slice(4,6) === 'lo') {
        computerwins++
    }
    

    result = playRound(getPlayerChoice(), getComputerChoice());
    if (result.slice(4,6) === 'wi') {
        playerwins++
    } else if (result.slice(4,6) === 'lo') {
        computerwins++
    }
    
    result = playRound(getPlayerChoice(), getComputerChoice());
    if (result.slice(4,6) === 'wi') {
        playerwins++
    } else if (result.slice(4,6) === 'lo') {
        computerwins++
    }
    
    result = playRound(getPlayerChoice(), getComputerChoice());
    if (result.slice(4,6) === 'wi') {
        playerwins++
    } else if (result.slice(4,6) === 'lo') {
        computerwins++
    }
    
    if (playerwins > computerwins) {
        alert('You won the whole game!')
    } else if (playerwins < computerwins) {
        alert('You lost the game!')
    } else alert("It's a tie in the end or you didn't play. Play again!")

}

//game();