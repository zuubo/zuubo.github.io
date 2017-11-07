var h1 = document.querySelector("h1");
h1.style.color = "pink";

var body = document.querySelector("body"); //selects the body of the html doc
var id = document.getElementById("dill");
var pickel = document.getElementsByClassName("pickel") [1];
var tags = document.getElementsByTagName("li"); //this will give all the elements with the tag, but it returns it as an array
var isBlue = false;

// querySelector will select things using css syntax, but only returns the first thing
var redd = document.querySelector(".red");

// querySelectorAll will return a list of all the selected thing
var dapikl = document.querySelectorAll("li");

var tag = document.querySelector("h1");

var p = document.getElementsByTagName("p")[0];

var a = document.querySelector("a");

var img = document.querySelector("img");

// ******************************************************

var button = document.querySelector("button");
var nut = document.querySelector(".nut");

button.addEventListener("click", function(){
  console.log("NUTTT!!!!!");
  nut.textContent = "NUTTT!@!!!!!!";
  alert("NUTUTUTUTUTT!!!ASBAS!!!!!");
})

nut.addEventListener("click", function(){
  alert("WHOAOSOAOSOO NUTTTTTT!!!!!!!!");
})

// ******************************************************

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i ++) {
  lis[i].addEventListener("click", function(){
    this.style.color = "red";
  });
}

// ******************************************************

setInterval(function(){
  if (isBlue) {
    body.style.background = "#f4f4f4";
    tag.textContent = "mandemm";
    a.setAttribute("href", "#")
    pickel.textContent = "movie db atm";
    img.setAttribute("src", "https://i.imgur.com/VPRZzEW.gif");
  }
  else {
    body.style.background = "#3498db";
    id.style.fontSize = "50px";
    tag.classList.toggle("bohld");
    tag.textContent = "save me";
    a.setAttribute("href", "https://www.google.ca/")
    pickel.textContent = "link to google"
    img.setAttribute("src", "https://i.imgur.com/yZHilBY.jpg")
  }
  isBlue = !isBlue;
}, 2000);



// **** start of movie database code ****

var movies = [
  {
    title: "Despacito",
    rating: 5,
    hasWatched: true
  },
  
  {
    title: "Gucci Gang Music Video",
    rating: 100,
    hasWatched: false
  },
  
  {
    title: "Guy Fieri Documentary",
    rating: 4,
    hasWatched: true
  },
  
  {
    title: "Hamilton: The Movie",
    rating: 1.5,
    hasWatched: false
  }
];



// for (var i = 0; i < movies.length; i++) {
//   var watched;
//   if (movies[i].hasWatched === true) {
//     watched = "watched ";
//   }
//   else {
//     watched = "not seen ";
//   }
//   console.log("You have " + watched + "\"" + movies[i].title + "\"" + " - " + movies[i].rating + " stars");
// }

// above is my initial attempt at coding this exercise
// below is the solution presented in the lecture

function buildString(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  }
  else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars";
  return result;
}

movies.forEach(function(movie){
  console.log(buildString(movie));
});