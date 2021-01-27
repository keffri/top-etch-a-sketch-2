const gridContainer = document.getElementById("gridContainer");

const gridSizeBtn = document.getElementById("gridSize");
gridSizeBtn.addEventListener("click", () => {
  cellsPerSide = +prompt("How many cells do you want per side?");
  if (cellsPerSide > 60 || cellsPerSide < 2 || cellsPerSide === null) {
    alert(`Please enter a new value.`);
    return;
  }
  emptyGrid();
  createGrid(cellsPerSide);
  hoverBlack();
});

const blackBtn = document.getElementById("black");
blackBtn.addEventListener("click", hoverBlack);

const randomBtn = document.getElementById("random");
randomBtn.addEventListener("click", hoverRandom);

const colorBtn = document.getElementById("color");
colorBtn.addEventListener("click", hoverColor);

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", resetGridColor);

function createGrid(cellsPerSide) {
  for (let i = 0; i < cellsPerSide * cellsPerSide; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
  }
  gridContainer.style.gridTemplateRows = `repeat(${cellsPerSide}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${cellsPerSide}, 1fr)`;
}

function hoverBlack() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "#000";
    });
  });
}

function hoverRandom() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      // cell.style.backgroundColor = `#${randomColor}`;
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const randomColor = `rgb(${red}, ${green}, ${blue})`;
      cell.style.backgroundColor = randomColor;
    });
  });
}

function hoverColor() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = colorBtn.value;
    });
  });
}

function resetGridColor() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "#ccc";
  });
}

function emptyGrid() {
  const cells = document.querySelectorAll(".cell");
  for (let i = cells.length - 1; i >= 0; i--) {
    cells[i].remove();
  }
}

(() => {
  createGrid(8);
  hoverBlack();
})();
