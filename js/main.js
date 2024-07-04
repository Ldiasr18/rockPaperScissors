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
    let playerChoice;
    playerChoice = prompt("Enter your choice: Rock, Paper or Scissors");
    //make sure the choice is valid and standardize the return
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock") {
        return "Rock";
    } else if (playerChoice === "paper") {
        return "Paper";
    } else if (playerChoice === "scissors") {
        return "Scissors";
    } else {
        return -1;
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a draw!");
    }else if (humanChoice === "Rock" && computerChoice === "Scissor"){
        console.log("You WIN! Rock beats Scissors!");
    }else if (humanChoice === "Paper" && computerChoice === "Rock"){
        console.log("You WIN! Paper beats rock!");
    }else if (humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log("You WIN! Scissors beats paper!");
    }else{
        console.log(`You LOSE! ${computerChoice} beats ${humanChoice}!`);
    }
}

//end functions


let computerChoice, humanChoice;
let computerScore = 0, humanScore = 0;

console.log("hello world!")
//functions call to get choices
computerChoice = getComputerChoice();
humanChoice = getHumanChoice();

//function to check the human choice, and if it's invalid asks to enter again the value.
while (humanChoice == -1) {
    console.log("choice is invalid \n please enter a valid choice: Rock, paper or scissors");
    humanChoice = getHumanChoice();
    //to do:
    //make an exit value if the player do not want to play anymore 
}

console.log(computerChoice + "computer");
console.log(humanChoice + "player");

playRound(humanChoice, computerChoice);



