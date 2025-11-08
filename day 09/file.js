//EXERCISE LEVEL 1
//01

//2
//forEach
function printNum(num){
    console.log(num ** 2);
}
const numbers = [1, 2, 3];
   numbers.forEach(printNum);

//map
function printNum(num){
    return num * 3;
}
const nums = [1, 2, 3];
const number = nums.map(printNum);
   console.log(number)

//filter
const digits = [1, 3, 5, 7, 9];
const result = digits.filter(function(num) {
  return num > 5;
});

console.log(result);

//reduce
const numbs = [1, 2, 3, 4, 5];
const sum = numbs.reduce((acc, current) => acc + current, 0);
console.log(sum);

//3
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

countries.forEach(function(country) {
  console.log(country);
});

//4
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(function(name) {
  console.log(name);
});

//5
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers1.forEach(function(number) {
  console.log(number);
});

//6
const countries0 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const upperCaseCountries = countries0.map(function(country) {
  return country.toUpperCase();
});

console.log(upperCaseCountries);

//7
const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const countriesLength = countries1.map(function(country) {
  return country.length;
});

console.log(countriesLength);

//8
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNumbers = numbers2.map(function(number) {
  return number * number;
});

console.log(squaredNumbers);

//9
const names0 = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const upperCaseNames = names0.map(function(name) {
  return name.toUpperCase();
});

console.log(upperCaseNames);

//10
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

const prices = products.map(function(item) {
  return item.price;
});

console.log(prices);

//11
const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const countriesWithLand = countries2.filter(function(country) {
  return country.includes('land');
});
console.log(countriesWithLand)

//12
const countries3 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const countriesWithSixCharacter = countries3.filter(function(country) {
  return country.length === 6;
});
console.log(countriesWithSixCharacter)

//13
const countries4 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const countriesWithSixLettersAndMore = countries4.filter(function(country) {
  return country.length >= 6;
});
console.log(countriesWithSixLettersAndMore)

//14
const countries5 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const countriesStartingWithE = countries5.filter(function(country) {
  return country.startsWith('E');
});
console.log(countriesStartingWithE)

//15
const products0 = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

const productsWithPrices = products0.filter(function(item) {
  return typeof item.price === 'number' && item.price !== 0;
});

console.log(productsWithPrices);

//16
function getStringLists(array){
        return array.filter(item => typeof item === 'string');
    }
const mixedProducts = ['yam', 'egg', 4, true]
console.log(getStringLists(mixedProducts))

//17
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const sum0 = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum0);

//18
const countries6 = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const sentence = countries6.reduce((acc, country, pos) => {
  if (pos === countries6.length - 1) {
    return `${acc}, and ${country}`;
  } else {
    return `${acc}, ${country}`;
  }
});

console.log(`${sentence} are north European countries.`);

//19

//20
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

const hasLongName = names1.some(name => name.length > 7);

console.log(hasLongName); 

//21
const countries7 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const allContainLand = countries7.every(country => country.includes('land'));

console.log(allContainLand);

//22

//23
const countries8 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const firstSixLetterCountry = countries8.find(country => country.length === 6);

console.log(firstSixLetterCountry);

//24
const countries9 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const indexSixLetters = countries9.findIndex(country => country.length === 6);
console.log(indexSixLetters);

//25
const countries10 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const indexNorway = countries10.findIndex(country => country === 'Norway');
console.log(indexNorway); 

//26
const countries11 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const indexRussia = countries11.findIndex(country => country === 'Russia');
console.log(indexRussia);

//EXERCISE LEVEL 2
const products1 = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const countries12 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
//1
const totalPrice = products1
  .map(item => Number(item.price)) 
  .filter(price => price > 0)
  .reduce((sum, price) => sum + price, 0)   
console.log(totalPrice)

//2
const totalPrice0 = products1.reduce((sum, item) => {
  const price = Number(item.price)
  if (price > 0) {
    return sum + price
  }
  return sum
}, 0)

console.log(totalPrice0)

//3
function categorizeCountries(pattern) {
  return countries12.filter(country => 
    country.includes(pattern)
  )
}

console.log(categorizeCountries('land'))
console.log(categorizeCountries('den'))
console.log(categorizeCountries('way'))

//4
function countStartingLetters(countries) {
  const letterCount = countries.reduce((acc, country) => {
    const firstLetter = country[0].toUpperCase()
    acc[firstLetter] = (acc[firstLetter] || 0) + 1
    return acc
  }, {})
  return Object.entries(letterCount).map(([letter, count]) => ({
    letter,
    count
  }))
}

console.log(countStartingLetters(countries12))

//5


//EXERCISE LEVEL 3

