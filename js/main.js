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
            console.log("choice is invalid \n please enter a valid choice: Rock, paper or scissors");
            //to do:
            //make an exit value if the player do not want to play anymore 
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You WIN! Rock beats Scissors!");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You WIN! Paper beats rock!");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You WIN! Scissors beats paper!");
        humanScore++;
    } else {
        console.log(`You LOSE! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

function playGame(){
    let computerChoice, humanChoice;
    console.log("teste");
    for(let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Score:
            Player: ${humanScore}
            Computer: ${computerScore}`);
    }
    if(humanScore > computerScore){
        console.log("you won The game!");
    }else{
        console.log("Computer won the game!")
    }
}

//end functions

//main

let computerScore = 0, humanScore = 0;
playGame();