
let playerScore = 0;
let computerScore = 0;
let playerSelection;

const playerImage = document.createElement('img');
document.querySelector('#playerPic').appendChild(playerImage);
const computerImage = document.createElement('img');
document.querySelector('#computerPic').appendChild(computerImage);

const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = e.target.id;
        playRound();
    });

});

function playRound() {
   function computerPlay() {
        let i = Math.random();
        if (i < 0.33) {
            computerImage.src = 'rock.jpg';
            return "Rock";
        } else if (i > 0.66) {
            computerImage.src = 'paper.jpg';
            return "Paper";
        } else {
            computerImage.src = 'scissors.jpg';
            return "Scissors";
        }
    }
    computerSelection = computerPlay();
    switch (playerSelection) {
        case 'rock':
            playerImage.src = 'rock.jpg';
            if (computerSelection == 'Paper') {
                content.textContent = 'Rock covered by Paper.  You lose this round...';
                computerScore++;
            }
            if (computerSelection == 'Scissors') {
                content.textContent = 'Rock beats Scissors.  You win this round!';
                playerScore++;
            }
            if (computerSelection == 'Rock') {
                content.textContent = 'Tie!  Play again...';
            }
        break;
        case 'paper':
            playerImage.src = 'paper.jpg';
            if (computerSelection == 'Rock') {
                content.textContent = 'Paper covers Rock.  You win this round!';
                playerScore++;
            }
            if (computerSelection == 'Paper') {
                content.textContent = 'Tie!  Play again...';
            }
            if (computerSelection == 'Scissors') {
               content.textContent = 'Paper sliced by Scissors.  You lose this round...';
               computerScore++;
            }
        break;
        case 'scissors':
            playerImage.src = 'scissors.jpg';
            if (computerSelection == 'Rock') {
                content.textContent = 'Scissors stomped by Rock. You lose this round...';
                computerScore++;
            }
            if (computerSelection == 'Paper') {
                content.textContent = 'Scissors cuts Paper.  You win this round!';
                playerScore++;
            }
            if (computerSelection == 'Scissors') {
                content.textContent = 'Tie!  Play again...';
            }
        }
    if (playerScore == 5) {
        content.textContent = `You win!  Final score is...  Player: ${playerScore}, Computer: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        content.textContent = `You lose!  Final score is...  Player: ${playerScore}, Computer: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    scoreDiv1.textContent = playerScore;
    scoreDiv2.textContent = computerScore;
}

const results = document.querySelector('#results');
const content = document.createElement('div');
content.classList.add('results');
content.textContent = 'Make your selection to begin!';
results.appendChild(content);

const score1 = document.querySelector('#playerScore');
const score2 = document.querySelector('#computerScore');
const scoreDiv1 = document.createElement('div');
const scoreDiv2 = document.createElement('div');
scoreDiv1.classList.add('score');
scoreDiv2.classList.add('score');
scoreDiv1.textContent = playerScore;
scoreDiv2.textContent = computerScore;
score1.appendChild(scoreDiv1);
score2.appendChild(scoreDiv2);










/*
this is unecessary code for creating separate fields for the final score
const final1 = document.querySelector('#finalPlayerScore');
const final2 = document.querySelector('#finalComputerScore');
const finalDiv1 = document.createElement('div');
const finalDiv2 = document.createElement('div');
finalDiv1.classList.add('score');
finalDiv2.classList.add('score');
final1.appendChild(finalDiv1);
final2.appendChild(finalDiv2);
*/


// Below is the generic code for creating new text content
/*
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
*/