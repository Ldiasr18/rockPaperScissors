//functions
function getComputerChoice() {
    let rand;
    rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return "Rock";

        case 1:
            return "Paper";

        case 2:
            return "Scissors";

    }
}

function getHumanChoice() {
    while(true){
    let playerChoice;
    playerChoice = prompt("Enter your choice: Rock, Paper or Scissors");
    //make sure the choice is valid and standardize the return
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock") {
        return "Rock";
    } else if (playerChoice === "paper") {
        return "Paper";
    } else if (playerChoice === "scissors") {
        console.log(playerChoice);
        return "Scissors";
    } else {
        //function to check the human choice, and if it's invalid asks to enter again the value.
            alert("choice is invalid \n please enter a valid choice: Rock, paper or scissors");
            //to do:
            //make an exit value if the player do not want to play anymore 
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a draw!");
        draw++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        alert("You WIN! Rock beats Scissors!");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        alert("You WIN! Paper beats rock!");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        alert("You WIN! Scissors beats paper!");
        humanScore++;
    } else {
        alert(`You LOSE! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

function playGame(){
    let computerChoice, humanChoice;
    for(let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        alert(`Score:
            Player: ${humanScore}
            Computer: ${computerScore}
            draws: ${draw}`);
            
    }
    if(humanScore > computerScore){
        alert("You won the game");
    }else if(humanScore == computerScore){
        alert("It's a draw!");
    }else{
        alert("The computer won the game!");
    }
}

//end functions

//main

let computerScore = 0, humanScore = 0, draw = 0;
playGame();