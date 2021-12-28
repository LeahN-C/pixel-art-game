/* -------------- Button IDs -------------- */
//Display colors
let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let greenButton = document.getElementById("green");
let yellowButton = document.getElementById("yellow");
let violetButton = document.getElementById("violet");
let currentColor = document.getElementById("currentColor");
//All color buttons
let colorButtons = document.querySelectorAll("button.colorButton")
//Other controls
let startButton = document.getElementById("start");
let clearBoardButton = document.getElementById("clearBoard");
let clearCellButton = document.getElementById("clearCell");
//Grid cells
let gridCells = document.querySelectorAll("div.cell");
let topLeftCell = document.getElementsByClassName("cell cell-1");

/* -------------- Click Events ------------- */
//Color button clicks
redButton.addEventListener("click", () => {
  currentColor.textContent = "Red";
  playPixelArtGame(event);
});
blueButton.addEventListener("click", () => {
  currentColor.textContent = "Blue";
  playPixelArtGame(event);
});
greenButton.addEventListener("click", () => {
  currentColor.textContent = "Green";
  playPixelArtGame(event);
});
yellowButton.addEventListener("click", () => {
  currentColor.textContent = "Yellow";
  playPixelArtGame(event);
});
violetButton.addEventListener("click", () => {
  currentColor.textContent = "Violet";
  playPixelArtGame(event);
});
//Other contol button clicks
startButton.addEventListener("click", () => {
  currentColor.textContent = "Black";
  playPixelArtGame(event);
});
clearBoardButton.addEventListener("click", () => {
  startPixelArtGame(event);
});
clearCellButton.addEventListener("click", () => {
    playPixelArtGame(event);
});
////When grid cells are clicked
//topLeftCell.addEventListener("click", () => {
//    playPixelArtGame(event);
//});
//gridCells.addEventListener("click", () => {
//});

function startPixelArtGame(event) {
  event.preventDefault();
  startButton.disabled = false;
  if (event.target === startButton) {
    alert("You started the game! ");
    startButton.disabled = true;
    currentColor.disabled = false;
    redButton.disabled = false;
    blueButton.disabled = false;
    greenButton.disabled = false;
    yellowButton.disabled = false;
    violetButton.disabled = false;
    //playPixelArtGame();
  } else if (event.target === clearBoardButton) {
    alert("You are now clearing the board. ");
  }
}

startButton.addEventListener("click", startPixelArtGame);

function playPixelArtGame(event) {
  event.preventDefault();
  //topLeftCell.disabled = false;
  gridCells.disabled = false;
  if (event.target === clearCellButton) {
    alert("You cleared the cell. ");
  } else if (currentColor.textContent === "Red") {
    alert("Your color is red. ");
  } else if (currentColor.textContent === "Blue") {
    alert("Your color is blue. ");
  } else if (currentColor.textContent === "Green") {
    alert("Your color is green. ");
  } else if (currentColor.textContent === "Yellow") {
    alert("Your color is yellow. ");
  } else if (currentColor.textContent === "Violet") {
    alert("Your color is violet. ");
  }
  //else if (event.target === gridCells) {
  //alert("You clicked on a grid cell. ")
  //}
}

colorButtons.addEventListener("click", playPixelArtGame);
gridCells.addEventListener("click", playPixelArtGame);
//clearBoardButton.addEventListener("click", startPixelArtGame)