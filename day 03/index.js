//EXCERCISE LEVEL 1
const firstName = "Dami";
const LastName = "Ebhojie";
const country = "Nigeria";
let city = "lagos";
let isMarried = false;
let year = 2025;
let age = 20;
console.log(typeof firstName);
console.log(typeof LastName);
console.log(typeof isMarried);
console.log(typeof year);
console.log(typeof age);
console.log(typeof country);
console.log(typeof city);

//2
console.log(typeof "10" === typeof 10);

//3
console.log(parseInt("9.8") === typeof 10);

//4
console.log(typeof 8 === typeof 8);
console.log(Boolean("isMarried"));
console.log(typeof city === typeof country);

console.log(typeof 8 === typeof city);
console.log(Boolean(""));
console.log(22 <= 2);

//5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
const Python = "Python";
const Jargon = "jargon";
console.log(Python.length);
console.log(Jargon.length);
console.log(Python.length != Jargon.length);

//6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 > 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

//7
const now = new Date();
console.log(now.getFullYear());

const now1 = new Date();
console.log(now1.getMonth());

const now2 = new Date();
console.log(now2.getDate());

const now3 = new Date();
console.log(now3.getDay());

const now4 = new Date();
console.log(now4.getHours());

const now5 = new Date();
console.log(now5.getMinutes());

const now6 = new Date();
console.log(now6.getTime());

//EXERCISE LEVEL 2
//1
let base = prompt("Enter base:");
base = String(base);
const height = prompt("Enter height:");
const area = 0.5 * base * height;
console.log(area);

//2
const a = Number(prompt("Enter side a:"));
const b = Number(prompt("Enter side b:"));
const c = Number(prompt("Enter side c:"));
const perimeter = a + b + c;
console.log(perimeter);

//3
const length = Number(prompt("Enter length:"));
const width = Number(prompt("Enter width:"));
const area1 = length * width;
const perimeter2 = 2 * (length + width);
console.log(area1);
console.log(perimeter1);

//4
let radius = Number(prompt("Enter radius:"));
const pi = 3.14;
const area3 = pi * radius * radius;
const circumference = 2 * pi * radius;
console.log(area3);
console.log(circumference);

//5

//6

//7

//8

//9
const hours = Number(prompt("Enter hours:"));
const ratePerHour = Number(prompt("Enter rate per hour:"));
let earning = hours * ratePerHour;
console.log(earning);

//10
const name1 = prompt("Enter your name:");
if (name1.length > 7) {
  console.log("Your name is long");
} else {
  console.log("Your name is short");
}

//11

//12
let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log(ageDifference);

//13
const currentYear = new Date().getFullYear();
const birthYear = Number(prompt("Enter birth year:"));
const age1 = currentYear - birthYear;
if (age1 >= 18) {
}

//14
const years = Number(prompt("Enter number of years you live:"));
const seconds = years * 365 * 24 * 60 * 60;
console.log(seconds);

//15

//EXERCISE LEVEL 3
//1
