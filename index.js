let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let greenButton = document.getElementById("green");
let yellowButton = document.getElementById("yellow");
let violetButton = document.getElementById("violet");
let currentColor = document.getElementById("currentColor");

let clearCell = document.getElementById('clearCell');
let clearBoard = document.getElementById('clearBoard');
let startButton = document.getElementById('start');

let allCells;
let selectedColor = 'black';

redButton.addEventListener('click', () => {
  currentColor.textContent = 'Red';
  selectedColor = 'red';
});

blueButton.addEventListener('click', () => {
  currentColor.textContent = 'Blue';
  selectedColor = 'blue';
});

greenButton.addEventListener('click', () => {
  currentColor.textContent = 'Green';
  selectedColor = 'green';
});

yellowButton.addEventListener('click', () => {
  currentColor.textContent = 'Yellow';
  selectedColor = 'yellow';
});

violetButton.addEventListener('click', () => {
  currentColor.textContent = 'Violet';
  selectedColor = 'violet';
});

clearCell.addEventListener('click', () => {
  currentColor.textContent = 'Light Gray';
  selectedColor = 'lightgray';
});

clearBoard.addEventListener('click', () => {
  let result = window.confirm('Are You Sure?');
  if (result) {
    allCells = document.querySelectorAll('.cell');
    allCells.forEach((cell) => {
      cell.style.backgroundColor = 'lightgray';
      cell.style.color = 'black';
    });
  }
});

startButton.addEventListener('click', () => {
  let allColorButtons = document.querySelectorAll('.colorButton');

  allColorButtons.forEach((button) => {
    button.disabled = false;
  });

  allCells = document.querySelectorAll('.cell');

  allCells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      e.target.style.backgroundColor = selectedColor;
      e.target.style.color = 'white';
    });
  });
});
