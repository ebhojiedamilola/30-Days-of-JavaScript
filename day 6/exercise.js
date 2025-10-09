//EXERCISE LEVEL 1
//1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}
let s = 0;
do {
  console.log(s);
  s++;
} while (s <= 10);

//2
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
let n = 10;
while (n >= 0) {
  console.log(n);
  n--;
}
let y = 10;
do {
  console.log(y);
  y--;
} while (y >= 0);

//3
let d = 7; 
for (let i = 0; i <= d; i++) {
  console.log(i);
}

//4
let text = "";
for (let i = 1; i <= 7; i++) {
  text += "#";
  console.log(text);
}

//5
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

//6
console.log("i\t i^2\t i^3"); 
for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t ${i ** 2}\t ${i ** 3}`);
}

//7
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//8
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//9
for (let i = 0; i <= 10; i++) {
  console.log(i, i ** 2, i ** 3);
}


//10
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log("The sum of all numbers from 0 to 100 is", sum);

//11
let sumEven = 0;
let sumOdd = 0;'"""""""'
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i; 
  }
}
console.log("The sum of all evens from 0 to 100 is", sumEven);
console.log("The sum of all odds from 0 to 100 is", sumOdd);

//12
let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}
console.log([sumEvens, sumOdds]);


//13
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
console.log(randomNumbers);
}

//14
let numbers = [];
while (numbers.length < 5) {
  let randomNum = Math.floor(Math.random() * 100); 
  if (!numbers.includes(randomNum)) {
    numbers.push(randomNum);
  }
}
console.log(numbers);

//15

//EXERCISE 2
//1

//2

//3
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let rgbColor = `rgb(${r},${g},${b})`;
console.log(rgbColor);

//4
const newArr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
console.log(newArr);

//5
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const countriesLength = [];
for (let i = 0; i < countries.length; i++){
  countriesLength.push(countries[1].length); 
}
console.log(countriesLength);

//6
const countries1 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
];
const countryData = [];
for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const code = country.toUpperCase().slice(0, 3);
  const length = country.length;

  countryData.push([country, code, length]);
}
console.log(countryData);

//7
const countriesWithLand = [];
for (let country of countries ) 




