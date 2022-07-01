// Function that repeats the rows and columns
//Within for loop, create the divs
//Make grid resizable within the same space -yet

function buildGrids(x, y, cellSize, parent) {
  parent.style.display = "grid";
  parent.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
  parent.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;

  let gridStructure = new DocumentFragment();

  for (let i = 0; i < x * y; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "squares";
    gridStructure.appendChild(newDiv);
  }

  parent.appendChild(gridStructure);
}

buildGrids(16, 16, 30, document.querySelector(".container"));

const btn = document.querySelector(".btn");
btn.addEventListener("click", (event) => {
  let input = prompt("Enter the number of squares you want per side");
  if (Number.isInteger(+input)) {
    buildGrids(input, input, 20, document.querySelector(".container"));
  } else {
    alert("Please enter a number and try again");
  }
});

// Generates new grid in same space!
