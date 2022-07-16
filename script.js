function grid(size) {
  const container = document.querySelector('.container');
  const cells = container.querySelectorAll('div');
  cells.forEach((div) => div.remove);
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let num = size * size;
  for (let i = 0; i < num; i++) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = '#fff';
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = '#000';
    });
    container.insertAdjacentElement('beforeend', cell);
  }
}

grid(16);

function changeSize(newSize) {
  if (newSize >= 2 && newSize <= 100) {
    grid(newSize);
  } else {
    console.log("Maximum input is 100.");
  }
}