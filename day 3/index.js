//EXCERCISE LEVEL 1
const firstName = "Damilola";
const LastName = "Ebhojie";
let country = "Nigeria";
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
let Python = "Python";
let Jargon = "jargon";
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
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

//7
const now = new Date()
console.log(now.getFullYear())

const now1 = new Date()
console.log(now1.getMonth())

const now2 = new Date()
console.log(now2.getDate())

const now3 = new Date()
console.log(now3.getDay())

const now4 = new Date()
console.log(now4.getHours())

const now5 = new Date()
console.log(now5.getMinutes())

const now6 = new Date()
console.log(now6.getTime())

//EXERCISE LEVEL 2
//1
let base = prompt("Enter base:")
let height = prompt("Enter height:")
let area = 0.5 * base * height
console.log(area)

//2
let a = Number(prompt("Enter side a:"))
let b = Number(prompt("Enter side b:"))
let c = Number(prompt("Enter side c:"))
let perimeter = a + b + c
console.log(perimeter)

//3
let length = Number(prompt("Enter length:"))
let width = Number(prompt("Enter width:"))
let area1 = length * width
let perimeter2 = 2 * (length + width)
console.log(area1)
console.log(perimeter1)

//4
let radius = Number(prompt("Enter radius:"))
const pi = 3.14
let area3 = pi * radius * radius
let circumference = 2 * pi * radius
console.log(area3)
console.log(circumference)

//5

//6

//7

//8

//9
let hours = Number(prompt("Enter hours:"))
let ratePerHour = Number(prompt("Enter rate per hour:"))
let earning = hours * ratePerHour
console.log(earning)

//10
let name1 = prompt("Enter your name:")
if (name1.length > 7) {
  console.log("Your name is long")
} else {
  console.log("Your name is short")
}

//11

//12
let myAge = 250
let yourAge = 25
let ageDifference = myAge - yourAge
console.log(ageDifference)

//13
let currentYear = new Date().getFullYear()
let birthYear = Number(prompt("Enter birth year:"))
let age1 = currentYear - birthYear
if (age1 >= 18) {}


//14
let years = Number(prompt("Enter number of years you live:"))
let seconds = years * 365 * 24 * 60 * 60
console.log(seconds)


//EXERCISE LEVEL 3
//1

