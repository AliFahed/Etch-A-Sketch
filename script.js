const container = document.querySelector('.container');

function grid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (size = 0; size < (rows * cols); size++) {
    let cell = document.createElement('div');
    cell.textContent = (size + 1);
    container.appendChild(cell).className = 'grid-item';
  }
}

grid(16, 16);