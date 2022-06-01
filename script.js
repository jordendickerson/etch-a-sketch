const grid = document.getElementById('grid');
let size = 16;

for (let i=0; i<size*size; i++){
    //set colums and rows to equal the size
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const tile = document.createElement('div');
    tile.classList.add('tile');
    grid.appendChild(tile);
}