//1. print all number between -10 and 19
//2. even number between 10 and 40
//3. odd numbers between 300 and 333
//4. all number divisible by 5 AND 3 between 5 and 50

console.log("print all number between -10 and 19");
for (var i = -19; i <=19; i++) {
    console.log(i);
}

console.log("even number between 10 and 40");
for (var i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("odd numbers between 300 and 333");
for (var i = 300; i <=333; i++) {
    if (i % 2 != 0 ) {
        console.log(i);
    }
}

console.log("all number divisible by 5 AND 3 between 5 and 50");
for (var i = 5; i <=50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}
















// var count1 = -10;
// var count2 = 10;
// var count3 = 300;
// var count4 = 5;

// console.log("print all number between -10 and 19");
// while (count1 <= 19) {
//     console.log(count1);
//     count1++;
// }

// //this is more efficient because the loop runs for half as long, but using an if statement will allow even numbers to be printed regardless of starting counter number
// console.log("even number between 10 and 40");
// while (count2 <= 40) {
//     console.log(count2);
//     count2+=2;
// }



// console.log("odd numbers between 300 and 333");
// while(count3 <= 333) {
//     if (count3 % 2 != 0) {
//         console.log(count3);
//     }
//     count3++;
// }

// console.log("all number divisible by 5 AND 3 between 5 and 50");
// while(count4 <= 50) {
//     if (count4 % 5 === 0 && count4 % 3 === 0) {
//         console.log(count4);
//     }
//     count4++;
// }



// var theNum = 42;
// var strGuess = prompt("Guess a number:");
// var guess = Number(strGuess);

// if (guess === theNum) {
//     alert("That's the right number, nice job!");
// }

// else if (guess < theNum) {
//     alert("That number is too low, try again!");
// }
// else if (guess > theNum) {
//     alert("That number is too high, try again!");
// }

// for(var i=0; i <10000; i++){
//     console.log(i);
// }



// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var age = prompt("How old are you?");
// console.log("Your full name is " + firstName + " " + lastName);
// console.log("You are " + age + " years old");




// var age = prompt("Enter how old you are");
// var days = age * 365;
// console.log("You are roughly " + days + " days old");





// var age = prompt("How old you is");

// if (age < 18 && age >= 0){
//     console.log("fuk outta here");
// }
// else if (age < 0){
//     console.log("ERROR: yeah bullshit");
// }
// else if (age <21){
//     console.log("ok come in but no drug water for you");
// }
// else if (age == 21) {
//     console.log("Happy 21st Birthday!");
// }
// else {
//     console.log("ok cum in");
// }

// if (age%2 != 0) {
//     console.log("your age is an odd number");
// }
// else {
//     console.log("your age is an even number");
// }

// if (Number.isInteger(Math.sqrt(age))) {
//     console.log("perfect square!");
// }
// else {
//     console.log("not a eprfect sqr");
// }