
    // Computer random move choice logic
    function getComputerChoice() {
      let randomNum = Math.floor(Math.random() * 3);

        if (randomNum === 0) {
          return "rock";
        } else if (randomNum === 1) {
         return "paper";
        } else {
          return "scissors";
        }
      }

    // Declare and assign variables for the player and computer selection
    let computerSelection;
    let playerSelection;

    // PLAY A ROUND - Function to compare the move selections and return the result
    function playRound(playerSelection, computerSelection) { 
      if (playerSelection === "rock" && computerSelection === "scissors") {
        return "win";
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "lose";
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "win";
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "lose";
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "win";
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "lose";
      } else {
        return "draw";
      }
    }
    
    let buttons = document.querySelector(".buttons");
    let newGame = document.querySelector("#newGame");
    let paraAnnouncer = document.querySelector("#announcer");
    let paraPlayerScore = document.querySelector("#playerScore");
    let paraCpuScore = document.querySelector("#cpuScore");

    let playerScore = 0;
    let computerScore = 0;

    buttons.addEventListener('click', event => {
      computerSelection = getComputerChoice();
      playerSelection = event.target.id;
      let result = playRound(playerSelection, computerSelection);

      // Checks that game is not over (less than five)
      if (playerScore < 5 && computerScore < 5) {
        switch (result) {
          case "win":
            playerScore++;
            paraCpuScore.textContent = `Computer: ${computerScore}`;
            paraPlayerScore.textContent = `Player: ${playerScore}`;
            
            // Checks the score again after incrementing to post appropriate message
            if (playerScore < 5) {
              paraAnnouncer.textContent = "You won the round!";
            } else {
              paraAnnouncer.textContent = "GG! You won the match! Start a new game!";
            }
            break;
          
          case "lose":
            computerScore++;
            paraCpuScore.textContent = `Computer: ${computerScore}`;
            paraPlayerScore.textContent = `Player: ${playerScore}`;

            if (computerScore < 5) {
              paraAnnouncer.textContent = "You lost the round!";
            } else {
              paraAnnouncer.textContent = "Unlucky! You lost the match! Start a new game!";
            }
            break;

          default:
            paraAnnouncer.textContent = "It's a draw.";
            break;
        }
      }
    })

    newGame.addEventListener("click", () => {
      playerScore = 0;
      computerScore = 0;
      paraCpuScore.textContent = `Computer: ${computerScore}`;
      paraPlayerScore.textContent = `Player: ${playerScore}`;
      paraAnnouncer.textContent = "New game started. Scores have been reset.";
    })