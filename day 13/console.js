//EXERCISE LEVEL 1
//1
const countries = ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt"];
console.table(countries);

//2
const countriesObject = {
  Nigeria: { capital: "Abuja", population: 223000000 },
  Ghana: { capital: "Accra", population: 33000000 },
  Kenya: { capital: "Nairobi", population: 55000000 },
  "South Africa": { capital: "Pretoria", population: 61000000 },
  Egypt: { capital: "Cairo", population: 110000000 }
};
console.table(countriesObject);
//3
console.group("Countries Data");

  console.group("Countries Array");
  console.table(countries);
  console.groupEnd();

  console.group("Countries Object");
  console.table(countriesObject);
  console.groupEnd();

console.groupEnd();

//EXERCISE LEVEL 2
//1
console.assert(10 > 2 * 10, "Assertion failed: 10 is not greater than 2 * 10");

//2
console.warn('This is a wsrning message to stop making mistake');

//3
console.error('This is an error message');

//EXERCISE LEVEL 3
//1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// while loop
console.time("while");
let i = 0;
while (i < arr.length) {
  arr[i] * 2;
  i++;
}
console.timeEnd("while");

// for loop
console.time("for");
for (let j = 0; j < arr.length; j++) {
  arr[j] * 2;
}
console.timeEnd("for");

// for...of loop
console.time("for...of");
for (const num of arr) {
  num * 2;
}
console.timeEnd("for...of");

// forEach loop
console.time("forEach");
arr.forEach(num => num * 2);
console.timeEnd("forEach");

