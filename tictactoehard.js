/* Tic-Tac-Toe Game
A lot of the coding for this app was done together as a class on Wed.

Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
  - Create a Tic-Tac-Toe game grid using your HTML element of choice.
  - When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
  - A heading should say whether it is X's or O's turn and change with each move made.
  - A button should be available to clear the grid and restart the game.
  - When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar
    Bootstrap component should appear across the screen announcing the winner.
*/

$(document).ready(function () {
  let currentPlayer = "X";
  let moves = 0;
  let hardMode = false;

  $('#resetButton').click(function () {
    hardMode = false;
    restartGame();
  })

  $('#computerWinsButton').click(function () {
    hardMode = true;
    youCantWin();
  })

  $("#ticTacToeGrid .grid-cell").click(function () {
    if ($(this).text() === "" && !gameOver()) { // if clicked .grid-cell is empty and game isn't over
      $(this).text(currentPlayer); // set text to current player('X'/'O')
      moves++;
      if (checkWinner(currentPlayer)) { // checks for winning patterns
        showAlert(currentPlayer + " Wins!");
        return;
      } else if (moves === 9) {
        showAlert("Draw!");
        return;
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X"; // changes currentPlayer at end of move
      $("#turnIndicator").text(currentPlayer + "'s Turn");
      }

      console.log(moves + " " + currentPlayer + hardMode);
      while (hardMode == true && currentPlayer == "X" && moves < 9) {
        console.log(`while checked` + hardMode);
        computerTurn();
      }
  });

  function checkWinner(player) {
      const winPatterns = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8], // Rows
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8], // Columns
          [0, 4, 8],
          [2, 4, 6]  //Diagonals
      ]
      return winPatterns.some((pattern) => { // checks that one of the winPatterns is correct
          return pattern.every((index) => { // checks that every item in a pattern array is correct
              return $("#ticTacToeGrid .grid-cell").eq(index).text() === player;
          })
      })
  }

  function restartGame() {
      $("#ticTacToeGrid .grid-cell").text(""); // clears all Xs & Os
      currentPlayer = "X";
      $('#turnIndicator').text("X's Turn");
      moves = 0;
      $('.alert').alert("close") // closes the winner alert
  }

  function showAlert(message) { // creats an alert in DOM
      const alertHTML = `<div class="alert alert-success" role="alert"> ${message}</div>`;
      $('.container').prepend(alertHTML); // places alertHTML at the beginning of the DIV 'container'
  }

  function gameOver() {
      return $('.alert').length > 0;
  }

  function youCantWin() {
    while (moves > 0) {
      restartGame();
    }
    $("#ticTacToeGrid .grid-cell")[0].click()
  }

  function computerTurn() {
    if (moves == 2) {
      if ($("#ticTacToeGrid .grid-cell")[1] = "O") {
        $("#ticTacToeGrid .grid-cell")[6].click()
      } else if ($("#ticTacToeGrid .grid-cell")[2] = "O") {
        $("#ticTacToeGrid .grid-cell")[8].click()
      } else if ($("#ticTacToeGrid .grid-cell")[3] = "O") {
        $("#ticTacToeGrid .grid-cell")[2].click()
      }else if ($("#ticTacToeGrid .grid-cell")[4] = "O") {
        $("#ticTacToeGrid .grid-cell")[8].click()
      }else if ($("#ticTacToeGrid .grid-cell")[5] = "O") {
        $("#ticTacToeGrid .grid-cell")[6].click()
      }else if ($("#ticTacToeGrid .grid-cell")[6] = "O") {
        $("#ticTacToeGrid .grid-cell")[8].click()
      }else if ($("#ticTacToeGrid .grid-cell")[7] = "O") {
        $("#ticTacToeGrid .grid-cell")[2].click()
      }else if ($("#ticTacToeGrid .grid-cell")[8] = "O") {
        $("#ticTacToeGrid .grid-cell")[2].click()
      }
    } else if (moves == 4) {
      if ($("#ticTacToeGrid .grid-cell")[3] = "O") {
        $("#ticTacToeGrid .grid-cell")[4].click()
      } else {
        $("#ticTacToeGrid .grid-cell")[3].click()
      }
    }
    
  }

})