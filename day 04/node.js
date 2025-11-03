// EXCERCISE LEVEL 1
//1
let age = prompt("Enter your age:");
age = Number(age);

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log(`You are left with ${18 - age} years to drive.`);
}

//2
let yourAge = prompt("Enter your age:");
let myAge = 25;
yourAge = Number(yourAge);
if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log("We are the same age");
}

//3
let a = 4;
let b = 3;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}
console.log(a > b ? "a is greater than b" : "a is less than b");

//4
let number = prompt("Enter a number:");
number = Number(number); 
if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}


//EXERCISE LEVEL 2
//1
let score = prompt("Enter your score:");
score = Number(score);
if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70 && score <= 89) {
  console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
  console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
  console.log("Grade: F");
} else {
  console.log("Invalid score.");
}

//2
let month = prompt("Enter the month:");
month = month.toLowerCase();
if (month === "september" || month === "october" || month === "november") {
  console.log("The season is Autumn.");
} else if (month === "december" || month === "january" || month === "february") {
  console.log("The season is Winter.");
} else if (month === "march" || month === "april" || month === "may") {
  console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
  console.log("The season is Summer.");
} else {
  console.log("Invalid month.");
}

//3

//EXERCISE LEVEL 3
