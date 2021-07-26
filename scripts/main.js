//get the DOM element:
const mainGrid = document.getElementById('main-grid');
const container = document.getElementById('main-container');
const changeSize = document.getElementById('change-size');
const clearBtn = document.getElementById('clear-btn')

//function to create grids
function createGrid(gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for (let i = 0; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = "grid-element";
        // gridItem.style.backgroundColor = 'yellow'; //For a test..........
        mainGrid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        mainGrid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        mainGrid.insertAdjacentElement('beforeend', gridItem);

    }
    var gridPixel = document.querySelectorAll('.grid-element');
    gridPixel.forEach(gridPixel => gridPixel.addEventListener('mouseover', gridColor))
        // console.log(gridPixel);
}

//create Grid Color function:
function gridColor(e) {
    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}

//Add event to the change size button
changeSize.addEventListener('click', changeGrid);

//add even to clear button:
clearBtn.addEventListener('click', resetButton);

//Create function for changing grid:
function changeGrid() {
    let newGrid = prompt("Enter new size: ")
    if (newGrid !== null) {
        newGrid = parseInt(newGrid);
        if (newGrid < 1 || newGrid > 64 || Number.isNaN(newGrid)) {
            alert("Enter a number from 1-64 range");
            changeGrid();
        } else {
            clearGrid();
            createGrid(newGrid);
        }
    }
}
//Clear function:
function resetButton(e) {
    clearGrid();
    createGrid(5);
}
//function to clear grid nodes:
function clearGrid() {
    const gridArray = Array.from(mainGrid.childNodes);
    gridArray.forEach((element) => {
        mainGrid.removeChild(element);
    });
}

//calling grid creation function
createGrid(5);