//Set the number of boxes in the in the drawing-box
let resolution = 20;

const boxContainer = document.querySelector('.drawing-box');

// Set up the grid, add mouseover event listener for each cell
for  (let i=0; i<resolution; i++){
    const columnBoxes = document.createElement('div');
    columnBoxes.classList.add('column-box');
    for (let j=0; j<resolution; j++){
        const rowBoxes = document.createElement('div');
        rowBoxes.classList.add('row-box');
        rowBoxes.addEventListener('mouseover', cellColor);
        columnBoxes.appendChild(rowBoxes);
    }
    boxContainer.appendChild(columnBoxes);
}

function cellColor() {
    this.classList.add('active');
    this.style.background = 'blue';                                      
}

// Set up mutually exclusive color buttons
const exclusiveBlackButton = document.querySelector('#black')
const exclusiveRainbowButton = document.querySelector('#rainbow')
const exclusiveEraseButton = document.querySelector('#erase')
exclusiveBlackButton.addEventListener('click', () => {
    inactivateButtons();
    exclusiveBlackButton.classList.add('active-button');
    exclusiveBlackButton.classList.remove('inactive-button');
})

exclusiveRainbowButton.addEventListener('click', () => {
    inactivateButtons();
    exclusiveRainbowButton.classList.add('active-button');
    exclusiveRainbowButton.classList.remove('inactive-button');
})

exclusiveEraseButton.addEventListener('click', () => {
    inactivateButtons();
    exclusiveEraseButton.classList.add('active-button');
    exclusiveEraseButton.classList.remove('inactive-button');
})


//Create a function that inactivates all buttons
function inactivateButtons() {
    const activeButtons = document.querySelectorAll('.active-button');
    for (let jj=0; jj<activeButtons.length; jj++){
        activeButtons[jj].classList.remove('active-button');
        activeButtons[jj].classList.add('inactive-button');
    }
};


// Set up 'Clear' button functionality
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    const activeBoxes = document.querySelectorAll('.active');
    for (let ii=0; ii<activeBoxes.length; ii++){
        activeBoxes[ii].classList.remove('active');
        activeBoxes[ii].style.background = 'white';
    };
});

