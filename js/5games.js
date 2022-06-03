let userScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    computerSelection = choices[randomNumber];
    return computerSelection;
  }

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    console.log('Game function: user choice is = ' + playerSelection);
    console.log('Game function: computer choice is = ' + computerSelection);

    switch (playerSelection + computerSelection) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
          //win(playerSelection, computerChoice);
          document.getElementById("result").innerText = "YOU WIN";
          document.getElementById("result").style.color = 'green';
          userScore = userScore +1;
          updateScore();
            console.log("user wins");
            console.log(`User score is ${userScore}.`);
            console.log(`Computer score is ${computerScore}.`);

          break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
          //loses(userChoice, computerChoice);
          document.getElementById("result").innerText ="YOU LOST";
          document.getElementById("result").style.color = 'red';
           computerScore= computerScore +1;
           updateScore();
           console.log("computer wins");
           console.log(`User score is ${userScore}.`);
            console.log(`Computer score is ${computerScore}.`);
          break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
          //draw(userChoice, computerChoice);
          document.getElementById("result").innerText = "DRAW";
          document.getElementById("result").style.color = 'yellow';
           console.log("draw");
          break;
      }
}
function updateScore(){
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
}
function game(playerSelection){
    for(let i = 0; i < 5; i++){
        playRound(playerSelection);
        prompt();
    }
    console.log("game is over")
    
}



function main(){
    document.getElementById("rock").addEventListener("click",() => game("rock"));
    document.getElementById("paper").addEventListener("click", () => game("paper"));
    document.getElementById("scissors").addEventListener("click", () => game("scissors"));
}

        
main();     