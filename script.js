const message = document.querySelector(".message");
const humanScoreElement = document.querySelector(".humanScore");
const computerScoreElement = document.querySelector(".computerScore");
const select = document.querySelector("select");
const results = document.querySelector(".results");
const humanChoiceValue = document.querySelector(".humanChoice")
const computerChoiceValue = document.querySelector(".computerChoice")
let humanScore = 0;
let computerScore = 0;
const maxScore = 10

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

const getHumanChoice = () => {
    return select.value;
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {

        //Make the first character capital
        message.textContent = `${humanChoice.at(0).toUpperCase() + humanChoice.slice(1)} ${computerChoice.at(0).toUpperCase() + computerChoice.slice(1)}. That's a Tie`;
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    computerScore ++;
                    message.textContent = `Paper Beats Rock. You Lost This Round`;
                } else {
                    humanScore ++;
                    message.textContent = `Rock Beats Scissors. You Won This Round`;
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    humanScore ++;
                    message.textContent = `Paper Beats Rock. You Win This Round`;
                } else {
                    computerScore ++;
                    message.textContent = `Scissors Beats Rock. You Lost This Round`;
                } 
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    computerScore ++;
                    message.textContent = `Rock Beats Scissors. Computer Won This Round`;
                } else {
                    humanScore ++;
                    message.textContent = `Scissors Beats Paper. You Won This Round`;
                }
                break;
        }   
    }
    // Check if either score has reached the max score
    if (humanScore === maxScore || computerScore === maxScore) {
        if (humanScore === maxScore) {
            results.textContent = `Congratulations. You Won The Game!`;
        } else {
            results.textContent = `Game Over. Computer Won the Game!`;
        }
            //Reset the Scores to 0
            humanScore = 0;
            computerScore = 0;
    }
}



select.addEventListener("change", () => {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
    humanChoiceValue.textContent = humanChoice;
    computerChoiceValue.textContent = computerChoice;

    //Reset the select to it's default value
    select.selectedIndex = 0;
}) 


