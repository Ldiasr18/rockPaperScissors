function getComputerChoice(){
    let rand;   
    rand = Math.floor(Math.random() * 3);
    switch (rand){
        case 0:
            return "Rock";
            
        case 1:
            return "Paper";

        case 2:
            return "Scissors";

    }
}

function getHumanChoice(){
    let playerChoice;
    playerChoice = prompt("Enter your choice: Rock, Paper or Scissors");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock"){
        return "Rock";
    }else if (playerChoice === "paper"){
        return "Paper";
    }else if(playerChoice === "scissors"){
        return "Scissors";
    }else{
        return -1;
    }
}

let computerChoice, humanChoice;
console.log("hello world!")
computerChoice = getComputerChoice();

humanChoice = getHumanChoice();
while (humanChoice == -1){
    console.log("choice is invalid \n please enter a valid choice: Rock, paper or scissors");
    humanChoice = getHumanChoice();
}
console.log(computerChoice);
console.log(humanChoice);

