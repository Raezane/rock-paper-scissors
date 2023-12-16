function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
    
}

function playRound(playerSelection, computerSelection) {

    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');
    const midtext = document.querySelector('#midtext');

    const playerscore = document.querySelector('#playerscore')
    const computerscore = document.querySelector('#computerscore')

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        midtext.textContent = 'You lose! Paper beats Rock.'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        midtext.textContent = 'You lose! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        midtext.textContent = 'You lose! Scissors beats Paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        midtext.textContent = 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        midtext.textContent = 'You win! Scissors beats Paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        midtext.textContent = 'You win! Paper beats Rock.';
    } else if (playerSelection === computerSelection) {
        midtext.textContent =  "It's a tie! Take another round.";
    }

    let winOrLose = midtext.textContent.slice(4,6)
    let playerpoints = parseInt(playerscore.textContent)
    let computerpoints = parseInt(computerscore.textContent)

    if (winOrLose === 'wi') {
        playerpoints += 1
        playerscore.textContent = playerpoints
    } else if (winOrLose === 'lo') {
        computerpoints += 1
        computerscore.textContent = computerpoints
    }

    if (checkScore(playerpoints, computerpoints)) {
        buttons.forEach((button) => {
            button.removeEventListener('click', startGame) }
        )}
}

function checkScore(playerpoints, computerpoints) {

    const final = document.querySelector('#final');
    if (playerscore.textContent === '5') {
        final.textContent = 'YOU WIN THE GAME!';
        return true;
    } else if (computerscore.textContent === '5') {
        final.textContent = 'YOU LOST THE GAME. GAME OVER.';
        return true;
    }

    return false;

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

function startGame() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let choice = button.className.split(' ')[0];
            playRound(choice, getComputerChoice());
        });
    });
}

const buttons = document.querySelectorAll('button');

startGame();