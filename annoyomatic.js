// var answer = prompt("Are we there there yet?");

// while (answer != "yes" && answer != "ye" && answer != "yeah") {
//     var answer = prompt("Are we there there yet?");
// }

// alert("ayy we're there!");

//This version will work as long as the user types yes at some point in their answer
var answer = prompt("Are we there there yet?");

while (answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there yet?");
}

alert("ayy we there");