var playerScore;
var computerScore;

function computerPlay(){
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*options.length);
    return options[randomNumber];
}

function playRound(playerSelection, computerSelection){
    let result = "";
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    result = "It's a tie! You both chose Rock";
                    break;
                case "paper":
                    result = "You Lose. Paper beats Rock";
                    computerScore++;
                    break;
                case "scissors": 
                    result = "You Win! Rock beats Scissors!"
                    playerScore++;
                    break;
            }
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    result = "You Win! Paper beats Rock";
                    playerScore++;
                    break;
                case "paper":
                    result = "It's a tie! You both chose Paper";
                    break;
                case "scissors":
                    result = "You Lose! Scissors  paper";
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection){
                case "rock":
                    result = "You Lose! Rock beats scissors";
                    computerScore++;
                    break;
                case "paper":
                    result = "You Win! Scissors beat paper";
                    playerScore++;
                    break;
                case "scissors":
                    result = "It's a tie! You both chose Scissors" ; 
                    break; 
            }
            break;
    }
    return result;
}

function results(){
    if(computerScore === playerScore){
        return "It's currently a tie! Both players have a score of " + playerScore + ".";
    }else if(computerScore > playerScore){
        return "The computer player is currently winning! They have a score of " + computerScore + ", while you have a score of " + playerScore + ".";
    }else if(computerScore < playerScore){
        return "You are currently winning with a score of " + playerScore + " and the computer player has a score of " + computerScore + ".";
    }
}

function game(){
    computerScore = 0;
    playerScore = 0;
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const roundWinner = document.querySelector('#roundWinner');
    const currentWinner = document.querySelector('#currentWinner');
    rock.addEventListener('click', function(e){
        roundWinner.innerText = playRound('rock', computerPlay());
        currentWinner.innerText = results();
    });
    paper.addEventListener('click', function(e) {
        roundWinner.innerText = playRound('paper', computerPlay());
        currentWinner.innerText = results();
    });
    scissors.addEventListener('click', function(e) {
        roundWinner.innerText = playRound('paper', computerPlay());
        currentWinner.innerText = results();
    });
}

game();