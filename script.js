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

createGrid(16);

function changeGridSize(newGridSize) {
  if (newGridSize >= 2 && newGridSize <= 100) {
    grid(newGridSize);
  } else {
    console.log("Maximum input is 100.");
  }
}

function colorCells() {
  this.style.backgroundColor = defaultColor;
}

function changeColorToUserChoice(userChoice) {
  defaultColor = userChoice;
}