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
        midtext.textContent = 'You lose the round! Paper beats Rock.'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        midtext.textContent = 'You lose the round! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        midtext.textContent = 'You lose the round! Scissors beats Paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        midtext.textContent = 'You win the round! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        midtext.textContent = 'You win the round! Scissors beats Paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        midtext.textContent = 'You win the round! Paper beats Rock.';
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
            button.disabled = true;
        });
    
        startOver()
    }
}

function checkScore(playerpoints, computerpoints) {

    const final = document.querySelector('#final');
    if (playerscore.textContent === '5') {
        final.textContent = 'YOU WIN THE GAME!';
        return true;
    } else if (computerscore.textContent === '5') {
        final.textContent = 'YOU LOST THE GAME. GAME OVER.';
        final.setAttribute('style', 'background-color: red;')
        return true;
    }

    return false;
}

function startOver() {

    const ask = document.querySelector('#ask')
    ask.textContent ='Play again?'

    const answers = document.querySelector('#answers')
    const yes = document.createElement('button');
    const no = document.createElement('button');
    answers.append(yes, no);

    yes.setAttribute('style', 'padding: 20px 50px;')
    no.setAttribute('style', 'padding: 20px 50px;')
    yes.textContent = 'Yes'
    no.textContent = 'No'

    yes.addEventListener('click', () => {
        location.reload();
    });

    no.addEventListener('click', () => {
        window.close();
    });

};

function startGame() {
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let choice = button.className.split(' ')[0];
            playRound(choice, getComputerChoice());
        });
    });
};

const buttons = document.querySelectorAll('button');

startGame();