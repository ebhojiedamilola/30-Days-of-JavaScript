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
