$(document).ready(function () {
    let currentPlayer = "X";
    let moves = 0;
    $('#resetButton').click(function () {
        restartGame();
    })
    $("#ticTacToeGrid .grid-cell").click(function () {
        if ($(this).text() === "" && !gameOver()) {
            $(this).text(currentPlayer);
            moves++;
            if (checkWinner(currentPlayer)) {
                showAlert(currentPlayer + " Wins!");
                return;
            } else if (moves === 9) {
                showAlert("Draw!");
                return;
            }
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            $("#turnIndicator").text(currentPlayer + "'s Turn");
        }
    });
    function checkWinner(player) {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],// Rows
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], // Columns
            [0, 4, 8],
            [2, 4, 6] //Diagonals
        ]
        return winPatterns.some((pattern) => {
            return pattern.every((index) => {
                return $("#ticTacToeGrid .grid-cell").eq(index).text() === player;
            })
        })
    }
    function restartGame() {
        $("#ticTacToeGrid .grid-cell").text("");
        currentPlayer = "X";
        $('#turnIndicator').text("X's Turn");
        moves = 0;
        $('.alert').alert("close")

    }
    function showAlert(message) {
        const alertHTML = `<div class="alert alert-success" role="alert"> ${message}</div>`;
        $('.container').prepend(alertHTML);
    }
    function gameOver() {
        return $('.alert').length > 0;
    }

})