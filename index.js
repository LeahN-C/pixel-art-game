let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let greenButton = document.getElementById("green");
let yellowButton = document.getElementById("yellow");
let violetButton = document.getElementById("violet");
let currentColor = document.getElementById("currentColor");

redButton.addEventListener("click", () => {
  currentColor.textContent = "Red";
});
blueButton.addEventListener("click", () => {
  currentColor.textContent = "Blue";
});
greenButton.addEventListener("click", () => {
  currentColor.textContent = "Green";
});
yellowButton.addEventListener("click", () => {
  currentColor.textContent = "Yellow";
});
violetButton.addEventListener("click", () => {
  currentColor.textContent = "Violet";
});
