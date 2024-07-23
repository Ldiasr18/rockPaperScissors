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
    const playerChoice = document.querySelectorAll('button');
    playerChoice.forEach((button) => {
        button.addEventListener("click", () => {
            let humanChoice = button.id;
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });
}

//todo function to change scores?

function playRound(humanChoice, computerChoice) {
    let humanScore =0, computerScore = 0;
    if (humanChoice === computerChoice) {
        alert("It's a draw!");
        //no caso seria aqui chamar aqui a função pra atualizar
        draw++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        alert("You WIN! Rock beats Scissors!");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        alert("You WIN! Paper beats Rock!");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        alert("You WIN! Scissors beats Paper!");
        humanScore++;
    } else {
        alert(`You LOSE! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}
 

playGame();