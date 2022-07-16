let defaultColor = 'black';

function createGrid(size) {
  const container = document.querySelector('.container');
  const cells = container.querySelectorAll('div');
  cells.forEach((div) => div.remove);
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let num = size * size;
  for (let i = 0; i < num; i++) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = 'white';
    cell.addEventListener('mouseover', colorCells);
    container.insertAdjacentElement('beforeend', cell);
  }
}

createGrid(16); // default grid 16 x 16

function changeGridSize(newGridSize) {
  if (newGridSize >= 2 && newGridSize <= 100) {
    createGrid(newGridSize);
  } else {
    console.log("Maximum input is 100.");
  }
}

function colorCells() {
  if (defaultColor === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() *360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = defaultColor;
  }
}

function changeColorToUserChoice(userChoice) {
  defaultColor = userChoice;
}