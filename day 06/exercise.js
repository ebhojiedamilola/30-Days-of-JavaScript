//EXERCISE LEVEL 1
//01
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
const countries2 = [
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
let countryArr = [];
for (let i = 0; i < countries2.length; i++) {
  let country = countries2[i];
  let abbreviation = country.slice(0, 3).toUpperCase();
  let length = country.length; 
  countryArr.push([country, abbreviation, length]);
}

console.log(countryArr);

//8
const countries3 = [
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

let countriesWithLand = [];

for (let i = 0; i < countries3.length; i++) {
  if (countries3[i].includes('land')) {
    countriesWithLand.push(countries2[i]);
  }
}

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log('All these countries are without land');
}

//9
const countries4 = [
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
];
['Japan', 'Kenya']
const longestCountry = countries4.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

console.log(longestCountry); 

//10
const countries5 = [
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
];

const fiveCharCountries = countries5.filter(country => country.length === 5);
console.log(fiveCharCountries);

//11
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];
const longestTech = webTechs.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);
console.log(longestTech);

//12
const webTechs1 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];
const webTechsArray = [];
for (const tech of webTechs) {
  webTechsArray.push([tech, tech.length]);
}
console.log(webTechsArray);

//13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = '';
for (const stack of mernStack) {
  acronym += stack[0];
}
console.log(acronym); 

//14
const webTechs2 = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const tech of webTechs) {
  console.log(tech)
}

//15
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

//16
 const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for (const stack of fullStack) {
  for (const tech of stack) {
    console.log(tech);
  }
}

//EXERCISE LEVEL 3
//1
const countries6 = [
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
];
const Countries6 = countries6.slice();
console.log(Countries6);

//2
const countries7 = [
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
];
const sortedCountries = countries7.slice().sort();
console.log(sortedCountries);

//3
const webTechs3 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];
const sortedWebTechs = webTechs3.slice().sort();
console.log(sortedWebTechs);

const mernStack1 = ['MongoDB', 'Express', 'React', 'Node'];
const sortedMenStack = mernStack1.slice().sort();
console.log(sortedMenStack);

//4
const countries8 = [
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
];
const countriesWithLand1 = countries8.filter(country => country.includes('land'));

console.log(countriesWithLand1);

//5
const countries9 = [
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
];
['Japan', 'Kenya']
const longestCountry1 = countries9.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

console.log(longestCountry1);

//6
const countries10 = [
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
];
const countriesWithLand2 = countries10.filter(country => country.includes('land'));

console.log(countriesWithLand2);

//7
const countries11 = [
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
];
const fourCharCountries = countries11.filter(country => country.length === 4);

console.log(fourCharCountries);

//8
const countries12 = [
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
];
const twoWordsCountries = countries12.filter(country => country.length === 2);

console.log(twoWordsCountries);

//9
const countries0 = [
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
];
const reversedCapitalizedCountries = [];
for (let i = countries0.length - 1; i >= 0; i--) {
  reversedCapitalizedCountries.push(countries0[i].toUpperCase());
}
console.log(reversedCapitalizedCountries);













