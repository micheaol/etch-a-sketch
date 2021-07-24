//get the DOM element:
const mainGrid = document.getElementById('main-grid');


//Create other divs inside the grid-element
const firstDiv = document.createElement('div');
const secondDiv = document.createElement('div');
const thirdDiv = document.createElement('div');
const fourthDiv = document.createElement('div');
const fiftDiv = document.createElement('div');
const sixthDiv = document.createElement('div');


//Create class for the grid-element
firstDiv.className = "grid-element";
secondDiv.className = "grid-element";
thirdDiv.className = "grid-element";
fourthDiv.className = "grid-element";
fiftDiv.className = "grid-element";
sixthDiv.className = "grid-element";


//insert the div in the main grid
mainGrid.appendChild(firstDiv);


//insert the div before the previous divs
mainGrid.insertBefore(secondDiv, firstDiv);
mainGrid.insertBefore(thirdDiv, secondDiv);
mainGrid.insertBefore(fourthDiv, thirdDiv);
mainGrid.insertBefore(fiftDiv, fourthDiv);
mainGrid.insertBefore(sixthDiv, fiftDiv);


//Add event listener
firstDiv.addEventListener('mouseover', mouseEnter);
secondDiv.addEventListener('mouseenter', mouseEnterSec);
secondDiv.addEventListener('mouseout', mouseOut);

function mouseOut(e) {
    secondDiv.style.backgroundColor = 'white';
}

function mouseEnterSec(e) {
    secondDiv.style.backgroundColor = 'rgb(25,10, 255)';
}

function mouseEnter(e) {
    // console.log(e.type);
    firstDiv.style.backgroundColor = 'rgb(0, 191, 255)';

}

// console.log(mainGrid.children);