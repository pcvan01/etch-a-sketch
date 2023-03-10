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
        rowBoxes.classList.add('inactive');
        rowBoxes.addEventListener('mouseover', cellColor);
        columnBoxes.appendChild(rowBoxes);
    }
    boxContainer.appendChild(columnBoxes);
}

// Set up 'Clear' button functionality
const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    const activeBoxes = document.querySelectorAll('.active');
    for (let ii=0; ii<activeBoxes.length; ii++){
        activeBoxes[ii].classList.remove('active');
        activeBoxes[ii].classList.add('inactive');
        activeBoxes[ii].style.background = 'white';
    };
});

function cellColor() {
    this.classList.remove('inactive');
    this.classList.add('active');
    this.style.background = 'blue';                                      
}