const grid = document.getElementById('grid');
const sizeButton = document.getElementById('size-button');

let size = 16;



function createGrid(tileSize){
    //create tiles
    for (let i=0; i<tileSize*tileSize; i++){
        //set colums and rows to equal the size
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        const tile = document.createElement('div');
        tile.classList.add('tile');
        grid.appendChild(tile);
    }

    //get tiles
    const tiles = document.querySelectorAll('.tile');

    //color tiles
    tiles.forEach((tile) => {
        tile.addEventListener('mouseover', () => {
            tile.classList.add('filled');
        })
    })
}

function clearGrid(){
    const tiles = document.querySelectorAll('.tile');
    
    //remove all tiles
    tiles.forEach((tile) => {
        tile.remove();
    })
}

createGrid(size);

sizeButton.addEventListener('click', () => {
    clearGrid();
    let askSize = prompt("What size do you want your grid?", "16");
    size = parseInt(askSize);
    console.log(size);
    if (isNaN(size)){
        size = 16;
        createGrid(size);
        alert("ERROR: You must input a number!");
    }else{
        createGrid(size);
    }
})