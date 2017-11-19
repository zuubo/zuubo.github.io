var numSquares = 6;
var colours = [];
var pickedColour; // the winning colour
var backgroundColor = "#ECF0F1";
var primaryColor = "#EB4F65";

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square"); // selects the square divs
var goalColour = document.querySelector("#theRGB"); // this is used for the display in the h1
var message = document.querySelector("#message"); // says if you win or miss
var resetBtn = document.querySelector("#reset"); // selects the reset/new colours button
var modeButtons = document.querySelectorAll(".mode"); //for properly switching modes

init();

function init(){
  setupModeButtons();// allows user to choose between easy or hard by clicking on the buttons
  setupSquares();// add click listeners so the game is playable, checks win condition when squares are clicked
  reset();
}



document.querySelector("body").style.backgroundColor = backgroundColor;
goalColour.textContent = pickedColour;



// resets the game
resetBtn.addEventListener("click", function(){
  reset();
})








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

function reset(){
    // generate all new colours
  colours = randomColourGen(numSquares);
  // pick a new goal colour from the array
  pickedColour = pickColour();
  goalColour.textContent = pickedColour;
  // change the colours of all the squares
  for (var i = 0; i < squares.length; i++) {
    if (colours[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  resetBtn.textContent = "New Colours";
  message.textContent ="";
  h1.style.backgroundColor = primaryColor;
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6; // this is ternary form, shorter way of writing the if statement
      // if(this.textContent==="Easy"){
      //   numSquares=3;
      // }
      // else{
      //   numSquares=6;
      // }
      reset();
    });
  }
}

function setupSquares() {
  // style.background doesnt work properly in firefox so use style.backgroundColor instead
  for (var i = 0; i < squares.length; i++) { //iterating over the square divs
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
}