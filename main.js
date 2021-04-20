function computerPlay() {
  /* Randomly return Rock, Paper, or Scissors */
  const options = ["rock", "paper", "scissors"];

  const randomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  return options[randomInt(3)];
}

function playRound(playerSelection, computerSelection) {
  /* return string that declares the winner of the round */

  const result = getResult(playerSelection, computerSelection);

  if (result == "tie") {
    return "It's a tie.";
  } else if (result == "win") {
    return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
  } else {
    return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
  }
}

function getResult(playerSelection, computerSelection) {
  /* return 'win', 'lose', or 'tie' based on player and computer selections */

  if (playerSelection == computerSelection) {
    return "tie";
  }
  // Player winning scenarios
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "win";
  } else {
    // Anything else, player loses
    return "lose";
  }
}

function game() {
  /* play a 5 round game that keeps score and repors winner/loser */
  // display results of each round
  // display results at end

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // Get player selection
    const computerSelection = computerPlay();
    let playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();

    // esc to quit game
    if (playerSelection == "esc") {
      console.log("Game quit early");
      return;
    }

    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
      playerSelection = prompt("Invalid response. Please choose rock, paper, or scissors...");

      // esc to quit game
      if (playerSelection == "esc") {
        console.log("Game quit early");
        break;
      }
    }

    const result = getResult(playerSelection, computerSelection);
    const resultString = playRound(playerSelection, computerSelection);

    if (result == "win") {
      playerScore++;
    } else if (result == "lose") {
      computerScore++;
    }

    console.log(resultString);
    console.log(`---------- SCORE ----------\nPlayer: ${playerScore} Computer: ${computerScore}\n${4 - i} rounds left`);
  }
}

game();
