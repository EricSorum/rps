
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Choose Rock, Paper or Scissors.  First to 5 wins!');
    playerSelection = playerSelection.toLowerCase();
    function computerPlay() {
        let i = Math.random();
        if (i < 0.33) {
            return "Rock";
        } else if (i >= 0.33 && i < 0.66) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }
    computerSelection = computerPlay();
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'Paper') {
                console.log("Rock covered by Paper.  You lose this round...");
                computerScore++;
            }
            if (computerSelection == 'Scissors') {
                console.log("Rock beats Scissors.  You win this round!");
                playerScore++;
            }
            if (computerSelection == 'Rock') {
                console.log("Tie!  Play again...");
            }
        break;
        case 'paper':
            if (computerSelection == 'Rock') {
                console.log('Paper covers Rock.  You win this round!');
                playerScore++;
            }
            if (computerSelection == 'Paper') {
                console.log('Tie!  Play again...')
            }
            if (computerSelection == 'Scissors') {
               console.log('Paper sliced by Scissors.  You lose this round...');
               computerScore++;
            }
        break;
        case 'scissors':
            if (computerSelection == 'Rock') {
                console.log('Scissors stomped by Rock. You lose this round...');
                computerScore++;
            }
            if (computerSelection == 'Paper') {
                console.log('Scissors cuts Paper.  You win this round!');
                playerScore++;
            }
            if (computerSelection == 'Scissors') {
                console.log('Tie!  Play again...')
            }
        break;
        default: 
            console.log('Please enter Rock, Paper, or Scissors.')
        }
}


function game() {
    while (playerScore < 5 && computerScore < 5) {
        playRound();
    }
    if (playerScore == 5) {
        console.log('You win!  Final score is...');
        console.log('Computer: ${computerScore}');
        console.log('You: ${playerScore}');
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        console.log('You lose!  Final score is...');
        console.log(`Computer: ${computerScore}`);
        console.log(`You: ${playerScore}`);
        playerScore = 0;
        computerScore = 0;
    }
}
