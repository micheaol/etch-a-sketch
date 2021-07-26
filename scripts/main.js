//get the DOM element:
const mainGrid = document.getElementById('main-grid');
const container = document.getElementById('main-container');

//function to create grids
function createGrid(gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for (let i = 0; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = "grid-element";
        gridItem.style.backgroundColor = 'yellow'; //For a test..........
        mainGrid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        mainGrid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        mainGrid.insertAdjacentElement('beforeend', gridItem);

    }
    var gridPixel = document.querySelectorAll('.grid-element');
    gridPixel.forEach(gridPixel => gridPixel.addEventListener('mouseover', gridColor))
        // console.log(gridPixel);
}

//create Grid Color function:
function gridColor(params) {

}

createGrid(10);