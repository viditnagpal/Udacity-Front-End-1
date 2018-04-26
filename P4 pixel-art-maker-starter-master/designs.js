$(document).ready(function(){

// Select color input
// Select size input

let color = $("#colorPicker");

var in_height = $("#inputHeight");
var in_width = $("#inputWeight");


const table = document.getElementById('pixelCanvas');


$("#inputSubmit").click(function (sub) {
    
    sub.preventDefault();
    makeGrid();
    
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {

    table.innerHTML = '';
    
    let x = in_height.val();
    
    let y = in_width.val();

    let Color_add = function (cell) {
        
        cell.addEventListener('click', function () {
        cell.style.backgroundColor = color.val();
            
        });
    }
    

    for (let i = 0; i < x; ++i) {
        
        let row = table.insertRow(i);
        
        for (var j = 0; j < y; ++j) {
            
            let box = row.insertCell(j);
            
            box.addEventListener('click', Color_add(box));
        }
    }
}
    
});