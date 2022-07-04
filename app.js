//Function that repeats the rows and columns according to user input
//Within for loop, create the divs, add class and append
//Make any grid resizable within the same space
//change color of squares

let container = document.querySelector(".container");

//build grid function
function buildGrids(x, y, parent) {
  parent.style.display = "grid";

  parent.style.setProperty("--grid-rows", x);
  parent.style.setProperty("--grid-columns", y);

  let gridStructure = new DocumentFragment();

  for (let i = 0; i < x * y; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "squares";
    gridStructure.appendChild(newDiv);
  }

  parent.appendChild(gridStructure);
}
// buildGrids(16, 16, container);

//resets game and refreshes window
const reset = document.querySelector(".btn");
reset.addEventListener("click", (event) => {
  window.location.reload();
});

//Prompts user for grid size input
function promptAnswer() {
  let input = prompt("enter the grid size you want between 6 to 64: ");
  if (input > 5 && input < 64) {
    buildGrids(input, input, document.querySelector(".container"));
  } else {
    do {
      input = prompt("Please make sure your value is between 6 and 64!");
    } while (input < 5 || input > 64);
    buildGrids(input, input, document.querySelector(".container"));
  }
}

//Change color of cells
container.addEventListener("mouseover", (cell) => {
  cell.target.style.background = "black";
});

promptAnswer();
