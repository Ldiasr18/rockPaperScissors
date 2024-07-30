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

function playGame() {
    const playerChoice = document.querySelectorAll("button");
    playerChoice.forEach((button) => {
        button.addEventListener("click", () => {
            let humanChoice = button.id;
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });
}

function playRound(humanChoice, computerChoice) {
    let winner = " ";

    if (humanChoice === computerChoice) {
        alert("It's a draw!");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        alert("You WIN! Rock beats Scissors!");
        winner = "human";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        alert("You WIN! Paper beats Rock!");
        winner ="human";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        alert("You WIN! Scissors beats Paper!");
        winner = "human";
    } else {
        alert(`You LOSE! ${computerChoice} beats ${humanChoice}!`);
        winner = "computer";
    }
    addScore(winner);
}
 
function addScore(winner){
    alert(winner);
    const humanScore = document.getElementById("humanScore");
    const computerScore = document.getElementById("computerScore");
    const drawScore = document.getElementById("drawScore"); 

    switch(winner){
        case "human":
            humanScore.innerText = String(parseInt(humanScore.innerText) + 1);
            break;
        case "computer":
            computerScore.innerText = String(parseInt(computerScore.innerText) + 1);
            break;
        default:
            drawScore.innerText = String(parseInt(drawScore.innerText) + 1);
            break;
        }


}


playGame();


