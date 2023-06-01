const gridContainer = document.getElementById("grid-container");
const newGridButton = document.getElementById("newGridButton");

// Function to create the default grid
function createDefaultGrid() {
  createGrid(16);
}

// Event listener for the "Choose grid size" button
newGridButton.addEventListener("click", function() {
  const newGridInput = prompt("How many squares would you like on each side of the grid?");
  const newGridSize = parseInt(newGridInput);

// Check if the input is vaild (A number between 0 - 100)
  if (isNaN(newGridSize) || newGridSize <= 0 || newGridSize > 100 ) {
    alert("Invalid input! Please enter a number between 0 - 100.");
  } else {
    removeGrid();
    createGrid(newGridSize); // If the input is valid, removes the old grid and creates a new grid
  }
});

// Function to create the grid
function createGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

// Creates grid squares and attaches event listener for hovering (mouseover)
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("gridSquare");
      gridContainer.appendChild(gridSquare);

      gridSquare.addEventListener("mouseover", function() {
        gridSquare.style.backgroundColor = "white";
      });
    }
  }
}

// Function to remove the grid
function removeGrid() {
  while (gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
}

// Call the createDefaultGrid function when the webpage first loads
createDefaultGrid();
