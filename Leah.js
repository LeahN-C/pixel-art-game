/* -------------- Button IDs -------------- */
//Display colors
let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let greenButton = document.getElementById("green");
let yellowButton = document.getElementById("yellow");
let violetButton = document.getElementById("violet");
let currentColor = document.getElementById("currentColor");
//All color buttons
let colorButtons = document.querySelectorAll(".colorButton");
//I NEED TO FIGURE OUT A WAY TO ACCESS ALL 5 COLORS
//for (let buttonNumbers = 0; buttonNumbers <colorButtons.length; buttonNumbers)
//Other controls
let startButton = document.getElementById("start");
let clearBoardButton = document.getElementById("clearBoard");
let clearCellButton = document.getElementById("clearCell");
//All grid cells
let gridCells = document.querySelectorAll(".cell");

/* -------------- Click Events ------------- */
//Color button clicks
redButton.addEventListener("click", () => {
  currentColor.textContent = "Current Color: Red";
  playPixelArtGame(event);
});
blueButton.addEventListener("click", () => {
  currentColor.textContent = "Current Color: Blue";
  playPixelArtGame(event);
});
greenButton.addEventListener("click", () => {
  currentColor.textContent = "Current Color: Green";
  playPixelArtGame(event);
});
yellowButton.addEventListener("click", () => {
  currentColor.textContent = "Current Color: Yellow";
  playPixelArtGame(event);
});
violetButton.addEventListener("click", () => {
  currentColor.textContent = "Current Color: Violet";
  playPixelArtGame(event);
});
//Other contol button clicks
startButton.addEventListener("click", () => {
  currentColor.textContent = "Current Color: Black";
  playPixelArtGame(event);
});
clearBoardButton.addEventListener("click", () => {
   let answer = window.confirm("Are you sure you want to clear the board? ");
        if (answer) {
            startPixelArtGame(event);
        } else {
            playPixelArtGame();
        }

});
clearCellButton.addEventListener("click", () => {
    currentColor.textContent = "Click any cell to reset color"
  playPixelArtGame(event);
});

/* ----- Starting Board, before game starts ------ */
//All buttons except "start" disabled
clearBoardButton.disabled = true;
clearCellButton.disabled = true;

/* ---------------- Functions --------------- */
//Calling the Function
startButton.addEventListener("click", startPixelArtGame);
//Function to start the game and enable buttons
function startPixelArtGame(event) {
  //Preventing page from refreshing
  event.preventDefault();
  startButton.disabled = true;
  if (event.target === startButton) {
    //Start button is disabled & other buttons are enabled
    startButton.disabled = true;
    clearBoardButton.disabled = false;
    clearCellButton.disabled = false;
    currentColor.disabled = false;
    redButton.disabled = false;
    blueButton.disabled = false;
    greenButton.disabled = false;
    yellowButton.disabled = false;
    violetButton.disabled = false;
  } else if (event.target === clearBoardButton) {
    gridCells.forEach((gridCell) => {
        gridCell.style.background = 'lightGrey'
      })
  }
}
//Function to play the game once start button is clicked
function playPixelArtGame(event) {
  //Preventing page from refreshing
  event.preventDefault();
  //User can now click on the grid cells
  gridCells.disabled = false;
  //When the grid cells are clicked
  gridCells.forEach((oneCell) => {
    oneCell.addEventListener("click", () => {
      oneCell.style.background = "black";
      //If user clicks on "clear cell" button & then clicks a cell to clear it
      if (event.target === clearCellButton) {
        oneCell.style.backgroundColor = "lightGrey";
      }
      //If user clicks on red
      else if (currentColor.textContent === "Current Color: Red") {
        oneCell.style.backgroundColor = "red";
      }
      //If user clicks on blue
      else if (currentColor.textContent === "Current Color: Blue") {
        oneCell.style.backgroundColor = "blue";
      }
      //If user clicks on green
      else if (currentColor.textContent === "Current Color: Green") {
        oneCell.style.backgroundColor = "green";
      }
      //If user clicks on yellow
      else if (currentColor.textContent === "Current Color: Yellow") {
        oneCell.style.backgroundColor = "yellow";
      }
      //If user clicks on violet
      else if (currentColor.textContent === "Current Color: Violet") {
        oneCell.style.backgroundColor = "violet";
      }
    });
  });
}
