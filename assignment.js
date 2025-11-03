const statesArray = [
  "Abuja",
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nassarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];
let numbers = "0123456789";
randomStrings = "";
randomNumbers = "";

for (let i = 0; i < 4; i++) {
  //   console.log(statesArray.slice(0, 3));
  // const states = statesArray.slice(0, 3).toUpperCase();
  const randomStateIndex = Math.floor(Math.random() * statesArray.length);
  console.log(randomStateIndex);
  const randomState = statesArray[randomStateIndex];
  console.log(randomState);
  const randomThreeLetters = randomState.slice(0, 3).toUpperCase();
  console.log(randomThreeLetters);
  const randomNumIndex = Math.floor(Math.random() * numbers.length);
  const randomNum = numbers[randomNumIndex];
  randomNumbers += randomNum;

  if (randomStrings.length < 3) {
    randomStrings += randomThreeLetters;
  }
}
randomStrings;
console.log(randomStrings);
console.log(randomNumbers);
console.log(`${randomStrings}-${randomNumbers}`);


//  loops
// for, forEach, for of, for in, while, do while
// 3 must have parts of any loop.
// start, increment, exit condition

const array = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

array.forEach((element) => {
  console.log(element);
});

let i = 1;
while (i < array.length) {
  console.log(i);
  i++;
}

if (20 < 10) {
  console.log(10);
}
let j = 12;
do {
  console.log(j);

  j++;
} while (j < 10);

// for in loop  to iterate/repeat over objects
const person = {
  name: "Adisa",
  location: "Mushin",
  age: 10,
  "shirt-size": "medium",
  hell_3: "w",
  shirtSize2: 20,
  key: 3,
};

const shirtSize = 2;

console.log(array[0]);

for (const key in person) {
  console.log(key);
  console.log(person["name"]);
  console.log(person["age"]);
  console.log(person[key]);
  console.log(person["shirt-size"]);
  console.log(person.hell_3);
  console.log(person.shirtSize2);
  console.log(person.key);
}