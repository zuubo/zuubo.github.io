var h1 = document.querySelector("h1");
var numInput = document.querySelector("input");

var p1BTN = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;

var p2BTN = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;

var reset = document.querySelector("#reset");
var gameOver = false;
var winningScore = 5;
var maxScore = document.querySelector("#maxScore");

p1BTN.addEventListener("click", function(){
  if(!gameOver) {
    p1Score++;
    if (p1Score === winningScore){
      gameOver = true;
      p1Display.classList.toggle("winner");
      console.log("gameover dude");
    }
    p1Display.textContent = p1Score;
  }
});

p2BTN.addEventListener("click", function(){
  if(!gameOver) {
    p2Score++;
    if (p2Score === winningScore){
      gameOver = true;
      p2Display.classList.toggle("winner");
      console.log("gameover dude");
    }
  }
  p2Display.textContent = p2Score;
});



reset.addEventListener("click", function(){
  resetit();
});

function resetit(){
  p1Score = 0; 
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
};


numInput.addEventListener("change", function(){
  winningScore = Number(this.value); 
  maxScore.textContent = winningScore;
  resetit();
});