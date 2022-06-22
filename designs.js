// Global variables
const colorPicker = document.getElementById("colorPicker");
const form = document.getElementById("sizePicker");

var canvas = document.getElementById("pixelCanvas");
var color = colorPicker.value;
// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    // Clear table
    while (canvas.firstChild) canvas.removeChild(canvas.firstChild);
    // Create canvas
    for (let i = 0; i < height; i++) {
        let row = canvas.insertRow();
        for (let j = 0; j < width; j++) {
            let col = row.insertCell();
        }
    }
}

// Main
// Get Height and Width, create Canvas
form.addEventListener("submit", (event) => {
    // Stop page refresh
    event.preventDefault();
    // Select width and height from DOM
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    // Create grid
    makeGrid(height, width);
});

// Select color
colorPicker.addEventListener("change", () => {
    color = colorPicker.value;
});

// Color the canvas
canvas.addEventListener("click", (event) => {
    // Select cell
    let cell = event.target.closest("td");
    
    // If no cell clicked
    if (!cell) {return;}
    
    // Color the cell
    if (!cell.style.backgroundColor){
        cell.style.backgroundColor = color;
    }
    else {
        cell.style.backgroundColor = null;
    }
});