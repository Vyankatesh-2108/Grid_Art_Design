// Select color input
var gridColor = document.getElementById('colorPicker');
// Select size input
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');
const submitButton = document.getElementById("submitBtn");
const grid = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
	submitButton.addEventListener('click' , function(x){
		//to check the listener 
		console.log("the user was submit the grid dimention");
		//to remove the old grid 
		grid.innerHTML = " ";
		//to keep the changes 
		x.preventDefault();
		//call the function
		makeGrid();
		
	});

	grid.addEventListener('click' , function(x) {
		// the if statement to prevent coloring all the grid
		if(x.target.nodeName === 'TD'){
		x.target.style.backgroundColor = gridColor.value; 
		}
	});

function makeGrid(x) {
	for(var i=0 ; i<gridHeight.value ; i++){
		const row = grid.insertRow (0);
		for( var j=0 ; j<gridWidth.value ; j++){
			row.insertCell (0);
		}
	}
}

// Your code goes here!
/* var form = document.getElementById('pixelCanvas');
form.style.backgroundColor = gridColor ; */

