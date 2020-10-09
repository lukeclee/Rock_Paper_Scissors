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

function game(){
    computerScore = 0;
    playerScore = 0;
    let playerSelection = "";
    for(i = 0; i < 5; i++){
        playerSelection = prompt("Please choose rock, paper, or scissors");
        console.log(playRound(playerSelection.toLowerCase(), computerPlay()));
    }
    if(computerScore === playerScore){
        console.log("It's a tie! Both players had a score of " + playerScore + ".");
    }else if(computerScore > playerScore){
        console.log("The computer player won! They had a score of " + computerScore + ", while you had a score of " + playerScore + ".");
    }else if(computerScore < playerScore){
        console.log("Congratulations! You won with a score of " + playerScore + " and the computer player had a score of " + computerScore + ".")
    }
}