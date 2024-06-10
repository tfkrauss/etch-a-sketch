//Reference to the game board div
const board = document.querySelector(".board");


let ROWS = 16;
let COLS = 16;
//Adds a tile to the specified row. Tile has a black border and grey filling.
function addTile(){
    const tile = document.createElement("div"); //Create one square on the board
    tile.classList.add("tile");
    tile.style.height = `calc(100%/ ${ROWS}`;
    tile.style.width = `calc(100%/ ${COLS}`;
    //Add event handler for hovering the tiles
    tile.addEventListener("mouseover", function () {
        tile.style.background = "black"
    });
    
    board.appendChild(tile);
}

//Prompts user for number of rows and columns then resets the board using these vals.
function resetBoard(){
    ROWS = prompt("Enter the number of rows: ");
    COLS = prompt("Enter the number of columns: ");

    createBoard(ROWS, COLS);
}

//Creates a board, given the number of rows and cols
function createBoard(numRows, numCols){
    board.innerHTML = "";

    for(i=0; i<numRows * numCols; i++){
        addTile();
    }
}

//Add event handler for the reset button
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetBoard);



createBoard(ROWS, COLS);    //Create initial board