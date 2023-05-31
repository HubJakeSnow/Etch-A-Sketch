const gridContainer = document.getElementById("grid-container");

for (let r = 0; r < 16; r++) {
  for (let c = 0; c < 16; c++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridContainer.appendChild(gridSquare);
  }
}
