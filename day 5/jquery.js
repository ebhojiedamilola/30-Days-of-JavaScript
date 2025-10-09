//EXERCISE LEVEL 1
//1
const emptyArr = [];

//2
const names = ['Dami', 'Rophy', 'Yusroh', 'Ekata', 'Titi', 'Aminah', 'Mimi'];

//3
console.log(names.length);

//4
const firstItem = names[0];
const middleString =Math.floor(names.length / 2)
middleItem = names[middleString]
console.log(middleItem);

//5
let mixedDataTypes = [
  "honest", 12, true, { name: "Dami", age: 25 }, [10, 2, 7], null,   undefined      
];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

//6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7
console.log(itCompanies);

//8
console.log(itCompanies.length);

//9
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[itCompanies.length - 1];

//10
console.log("All companies:");
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

//11
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

//12
console.log(`${itCompanies.join(', ')} are big IT companies.`);

//13
let companyToCheck = "Sufthero";
if (itCompanies.includes(companyToCheck)) {
  console.log(companyToCheck);
} else {
  console.log("Company not found");
}

//14

//15
const sortedCompanies = [itCompanies].sort();
console.log(sortedCompanies);

//16
const reversedCompanies = [sortedCompanies].reverse();
console.log(reversedCompanies);

//17
console.log(itCompanies.slice(0, 3));

//18
console.log(itCompanies.slice(-3));

//19
const middleNumber = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  console.log(itCompanies.slice(middleNumber - 1, middleNmber + 1));
} else {
  console.log(itCompanies[middleNumber]);
}

//20
const removeFirst = [itCompanies];
removeFirst.shift();
console.log(removeFirst);

//21
const removeMiddlecompany = [itCompanies];
const mid = Math.floor(removeMiddlecompany.length / 2);
if (removeMiddlecompany.length % 2 === 0) {
  removeMiddlecompany.splice(mid - 1, 2);
} else {
  removeMiddlecompany.splice(mid, 1);
}
console.log(removeMiddlecompany);


//22
const removeLastcompany = [...itCompanies];
removeLastcompany.pop();
console.log(removeLastcompany);

//23
const removeAllcompany = [itCompanies];
removeAllcompany.length = 0;
console.log(removeAllcompany);

//EXERCISE LEVEL 2
// 1-done in countries.js and web_tech.js

//2
const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const cleanText = text.replace(/[.,]/g, '');
const words = cleanText.split(' ');
console.log(words);
console.log(words.length);

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}
const allergicToHoney = true;
if (allergicToHoney) {
  const honeyNumber = shoppingCart.indexOf('Honey');
  if (honeyNumber !== -1) {
    shoppingCart.splice(honeyNumber, 1);
  }
}
const teaNumber = shoppingCart.indexOf('Tea');
if (teaNumber !== -1) {
  shoppingCart[teaNumber] = 'Green Tea';
}
console.log(shoppingCart);


//4
let countries = ["Nigeria", "Ghana", "Kenya", "Ethiopia", "Egypt"];
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

//5
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//EXERISE LEVEL 3
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];
console.log(minAge);
console.log(maxAge);

//2
const countries1 = [
  "Nigeria", "Ghana", "Kenya", "Egypt",
  "Morocco", "South Africa", "finland"];
  const middleIndex = Math.floor(countries1.length / 2);
if (countries.length % 2 === 0) {
  console.log(countries1.slice(middleIndex - 1, middleIndex + 1));
} else {
  console.log(countries1[middleIndex]);
}

//3
let firstHalf, secondHalf = "halves";
if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, countries.length / 2);
  secondHalf = countries.slice(countries.length / 2);
} else {
  firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
  secondHalf = countries.slice(Math.ceil(countries.length / 2));
}
console.log(firstHalf);
console.log(secondHalf);










