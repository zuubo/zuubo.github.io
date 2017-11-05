var h1 = document.querySelector("h1");
h1.style.color = "pink";

var body = document.querySelector("body"); //selects the body of the html doc
var isBlue = false;

setInterval(function(){
  if (isBlue) {
    body.style.background = "white";
  }
  else {
    body.style.background = "#3498db";
  }
  isBlue = !isBlue;
}, 1000);


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