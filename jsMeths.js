// this code is for changing the background color on button press
var body = document.querySelector("body");
var button = document.querySelector("button");
var switcher = true;

button.addEventListener("click", togCol);

function togCol() {
  switcher = !switcher;
  if (switcher === true) {
    body.style.background = "#CDA4A3";
    body.style.color = "white";
  }
  else if (switcher === false) {
    body.style.background = "#D9D9D9";
    body.style.color = "grey  ";
  }
}

// the smarter solution would have been to use .toggle
// create a css class that changes the background color
// then using .toggle to toggle that class on and off
// document.body.classList.toggle("whatever class");

// ****************************************************************

var obj = {
  name: "Ched",
  age: 36,
  isCool: true,
  friends: ["dill", "terry"],
  speak: function() {
    return "surfs up deewwds";
  }
}

var obj2 = {
  name: "Deck",
  age: 49,
  isCool: false,
  friends: ["Salami", "tillers"],
  speak: function() {
    return "I can recommend you a great vitamin";
  },
  //the function print uses data from obj2.friends, it refers to this data using this.friends
  print: function() {
    this.friends.forEach(function(element){
    console.log(element);
  })
  }
}

// can use this. to refer to the enclosing object and access data within the object


