var numSquares = 6;
var colours = randomColourGen(numSquares);
var backgroundColor = "#ECF0F1";
var primaryColor = "#EB4F65";

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square"); // selects the square divs
var pickedColour = pickColour(); // the winning colour
var goalColour = document.querySelector("#theRGB"); // this is used for the display in the h1
var message = document.querySelector("#message"); // says if you win or miss

var resetBtn = document.querySelector("#reset");

var ezMode = document.querySelector("#ezBTN");
var hrdMode = document.querySelector("#hardBTN");

document.querySelector("body").style.backgroundColor = backgroundColor;

ezMode.addEventListener("click", function() {
  ezMode.classList.add("selected");
  hrdMode.classList.remove("selected");  
  numSquares = 3;
  colours = randomColourGen(numSquares);
  pickedColour = pickColour();
  goalColour.textContent = pickedColour;
  message.textContent ="";
  for (var i = 0; i < squares.length; i++) {
    if (colours[i]){
    squares[i].style.backgroundColor = colours[i];
    }
    else {
    squares[i].style.display = "none";
    }
  }
})

hrdMode.addEventListener("click", function() {
  ezMode.classList.remove("selected");
  hrdMode.classList.add("selected");
  numSquares = 6;
  colours = randomColourGen(numSquares);
  pickedColour = pickColour();
  goalColour.textContent = pickedColour;
  message.textContent ="";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i];
    squares[i].style.display = "block";
  }
})

goalColour.textContent = pickedColour;

resetBtn.addEventListener("click", function(){
  // generate all new colours
  colours = randomColourGen(numSquares);
  // pick a new goal colour from the array
  pickedColour = pickColour();
  goalColour.textContent = pickedColour;
  // change the colours of all the squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i];
  }
  this.textContent = "New Colours";
  message.textContent ="";
  h1.style.backgroundColor = primaryColor;
})

// style.background doesnt work properly in firefox so use style.backgroundColor instead
for (var i = 0; i < squares.length; i++) { //iterating over the square divs
  // assigns a color to the squares
  squares[i].style.backgroundColor = colours[i];
  
  // gives each square a click event
  squares[i].addEventListener("click", function() {
    var clickedColour = this.style.backgroundColor;
    if (clickedColour === pickedColour){
      message.textContent = "Correct!!!!!"; // prints correct if the clicked colour is same as the goal/picked colour
      changeColours(clickedColour);
      resetBtn.textContent = "Play again?";
      h1.style.backgroundColor = pickedColour;
      document.querySelector("#stripe").style.color = pickedColour;
    }
    else {
      this.style.backgroundColor = backgroundColor;
      message.textContent = "Try Again!"; // prints try again when wrong colour is clicked
    }
  })
}





function changeColours(colour){
  // iterate over squares
  for (var i = 0; i < squares.length; i ++) {
    // change the background colour of the current square to given colour
    squares[i].style.backgroundColor = colour;
  }
}

function pickColour() {
  // picks a random number between 0 and how many items are in colours
  var num = Math.floor(Math.random() * colours.length); 
  // gives the rgb value stored at the index of the random number
  return colours[num];
}

function randomColourGen(num) {
  // initialize empty array
  var arr = [];
  // add num random colours to array
  for (var i = 0; i < num; i ++) {
    // get random colour and push into array
    arr.push(randomColour());
  }
  // returns the array
  return arr;
}

function randomColour() {
  // picks red from 0 and 255
  var r = Math.floor(Math.random() * 256);
  // picks green from 0 and 255
  var g = Math.floor(Math.random() * 256);
  // picks blue from 0 and 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}