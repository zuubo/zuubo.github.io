var colours = randomColourGen(6);

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square"); // selects the square divs
var pickedColour = pickColour(); // the winning colour
var goalColour = document.querySelector("#theRGB"); // this is used for the display in the h1
var message = document.querySelector("#message"); // says if you win or miss

var resetBtn = document.querySelector("#reset");

goalColour.textContent = pickedColour;

resetBtn.addEventListener("click", function(){
  // generate all new colours
  colours = randomColourGen(6);
  // pick a new goal colour from the array
  pickedColour = pickColour();
  goalColour.textContent = pickedColour;
  // change the colours of all the squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i];
  }
  
  h1.style.backgroundColor = "#232323";
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
    }
    else {
      this.style.backgroundColor = "#232323";
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