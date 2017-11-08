var colours = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColour = colours[1];
var goalColour = document.querySelector("#theRGB");
var message = document.querySelector("#message");

goalColour.textContent = pickedColour;

// style.background doesnt work properly in firefox so use style.backgroundColor instead
for (var i = 0; i < squares.length; i++) {
  // assigns a color to the squares
  squares[i].style.backgroundColor = colours[i];
  
  // gives each square a click event
  squares[i].addEventListener("click", function() {
    var clickedColour = this.style.backgroundColor;
    if (clickedColour === pickedColour){
      message.textContent = "Correct!!!!!";
    }
    else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!";
    }
  })
}