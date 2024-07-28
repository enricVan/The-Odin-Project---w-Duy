let player1Options = [];
let player2Options = [];

let currentPlayer = 1;
let gameOver = false;

const cells = document.querySelectorAll(".cell");
const result = document.querySelector("#result");

const cellsArray = Array.from(cells);
console.log("cellsArray", cellsArray);

const checkDuplicateOptions = (option) => {
  const existOptions = [...player1Options, ...player2Options];
  console.log(existOptions.includes(option));
  return existOptions.includes(option);
};

cellsArray.forEach((cell) => {
  cell.addEventListener("click", function () {
    if (!gameOver) {
      if (currentPlayer === 1) {
        if (checkDuplicateOptions(cell.id)) {
          return;
        }
        cell.innerHTML = "X";
        player1Options.push(cell.id);
        if (checkWin(player1Options)) {
          result.innerHTML = "Player 1 wins!";
          gameOver = true;
          return;
        }
        currentPlayer = 2;
      } else {
        if (checkDuplicateOptions(cell.id)) {
          return;
        }
        cell.innerHTML = "O";
        player2Options.push(cell.id);
        if (checkWin(player2Options)) {
          result.innerHTML = "Player 2 wins!";
          gameOver = true;
          return;
        }
        currentPlayer = 1;
      }
      cell.removeEventListener("click", this);
    }
  });
});

function checkWin(player) {
  const winningCombos = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
    ["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"],
    ["A1", "B2", "C3"],
    ["A3", "B2", "C1"]
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    if (winningCombos[i].every((cell) => player.includes(cell))) {
      return true;
    }
  }
  return false;
}

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
  cellsArray.forEach((cell) => {
    cell.innerHTML = "";
    cell.addEventListener("click", this);
  });
  player1Options = [];
  player2Options = [];
  currentPlayer = 1;
  gameOver = false;
  result.innerHTML = "";
});
