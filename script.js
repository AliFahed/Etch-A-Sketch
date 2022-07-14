function grid(size) {
  const container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < 256; i++) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = 'blue';
    container.insertAdjacentElement('beforeend', cell);
  }
}

grid(16);