//EXERCISE LEVEL 1
//1
function fullName() {
  console.log("Ebhojie Oluwadamilola");
}
fullName();

//2
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName("Ebhojie", "Damilola"));

//3
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(5, 7));

//4
function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(10, 5));

//5
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
console.log(perimeterOfRectangle(10, 5));

//6
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
console.log(volumeOfRectPrism(4, 5, 6));

//7
function areaOfCircle(r) {
  return Math.PI * r * r;
}
console.log(areaOfCircle(7));

//8
function circumOfCircle(r) {
  return 2 * Math.PI * r;
}
console.log(circumOfCircle(7));

//9
function density(mass, volume) {
  return mass / volume;
}
console.log(density(20, 5));

//10
function speedOfMovingObject(totaldistance, time) {
  return totaldistance / time;
}
console.log(speedOfMovingObject(20, 10));

//11
function weight(mass, gravity) {
  return mass * gravity;
}
console.log(weight(50, 9.81));

//12
function convertCelsiusToFahrenheit(Celsius) {
  return (Celsius * 9) / 5 + 32;
}
console.log(convertCelsiusToFahrenheit(0, 32));

13;
function calculateBmi(weight, height) {
  const BMI = weight / (height * height);
  let category = "";

  if (BMI < 18.5) {
    category = "underweight";
  } else if (18.5 >= BMI || BMI <= 24.9) {
    category = "Normal weight";
  } else if (25 >= BMI || BMI <= 29.9) {
    category = "Overweight";
  } else if (BMI >= 30) {
    category = "Obese";
  }
  console.log(BMI);

  // return weight / (height * height)
  return category;
}
console.log(calculateBmi(30, 1.55));
console.log(calculateBmi(50, 1.6));
console.log(calculateBmi(200, 2.6));
console.log(calculateBmi(100, 0.5));

//14
function checkSeason(month) {
  if (["september", "october", "november"].includes(month)) {
    return "Autumn";
  } else if (["december", "january", "february"].includes(month)) {
    return "Winter";
  } else if (["march", "april", "may"].includes(month)) {
    return "Spring";
  } else if (["june", "july", "august"].includes(month)) {
    return "Summer";
  }
}
console.log(checkSeason("september"));
console.log(checkSeason("january"));
console.log(checkSeason("march"));

//15
function findMax(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

//EXERCISE LEVEL 2
//1
function calculateLineaarEquation(a, b, c, x, y) {
  equation = a * x + b * y + c;
  return equation;
}
console.log(calculateLineaarEquation(1, 2, 3, 3, 6, -2));

// //2
// function QuadraticEquation(a, b, c, x, y){
//   equation = a^2 * x + b * y + c
//   return equation
// }
// console.log(QuadraticEquation())
// console.log(QuadraticEquation(1, 4, 4))
// console.log(QuadraticEquation(1, -1, 4))
// console.log(QuadraticEquation(1, 7, 12))
// console.log(QuadraticEquation(1, 0, -4))
// console.log(QuadraticEquation(1, -1, 0))

//3
function printArray(array) {
  for (const item of array) {
    console.log(item);
  }
}
printArray([1, 2, 3]);

//4
function showDateTime() {
  const now = new Date();

  // let day = now.getDate();
  // let month = now.getMonth() + 1;
  // let year = now.getFullYear();
  // let hours = now.getHours();
  // let minutes = now.getMinutes();

  const day = "0" + 8;
  const month = "0" + 1;
  const hours = "0" + 4;
  const minutes = "0" + 8;
  const year = 2020;

  const dateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
  console.log(dateTime);
}
showDateTime();

//5
function swapValues(x, y) {
  let temp = x;
  x = y;
  y = temp;
  console.log(`x = ${x}, y = ${y}`);
}
swapValues(3, 4);
swapValues(4, 5);

//6
function reverseArray(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
    reversed.push(array[i]);
  }
  console.log(reversed);
}
reverseArray([1, 2, 3, 4, 5]);
reverseArray(["A", "B", "C"]);

//7
function capitalizeArray(array) {
  let capitalizedArray = [];

  for (let i = 0; i < array.length; i++) {
    capitalizedArray.push(array[i].toUpperCase());
  }

  return capitalizedArray;
}
console.log(capitalizeArray(["apple", "banana", "october"]));

//8
function addItem(item) {
  const addedItem = [];
  addedItem.push(item);
  return addedItem;
}
console.log(addItem("month"));

//9
function removeItem(index) {
  const removedItem = ["mango", "orange", "youghurt"];
  removedItem.splice(index, 1);
  return removedItem;
}
console.log(removeItem(1));

//10
function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(7));
console.log(sumOfNumbers(6));

//11
function sumOfOdds(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(7));
console.log(sumOfOdds(3));

//12
function sumOfEven(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(6));
console.log(sumOfEven(3));

//13
function evensAndOdds(number) {
  let evens = 0;
  let odds = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log(`the sum of odds are ${odds}`);
  console.log(`the sum of evens are ${evens}`);
}
evensAndOdds(80);

//14
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

//15
function randomUserIp() {
  let ip = [];
  for (let i = 0; i < 4; i++) {
    ip.push(Math.floor(Math.random() * 256));
  }
  return ip.join(".");
}
console.log(randomUserIp());

//16
function randomMacAddress() {
  let mac = [];
  for (let i = 0; i < 6; i++) {
    mac.push(
      Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, '0')
        .toUpperCase()
    );
  }
  return mac.join(":");
}
console.log(randomMacAddress());

//17
function randomHexaNumberGenerator() {
  const hexNumber = "0123456789abcdef";
  let generator = "#";
  for (let i = 0; i < 6; i++) {
    const randomHex = Math.floor(Math.random() * hexNumber.length);
    generator += hexNumber[randomHex];
  }
  return generator;
}
console.log(randomHexaNumberGenerator());

//18
function userIdGenerator() {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 7; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return id;
}
console.log(userIdGenerator());


//EXERCISE LEVEL 3
//1

//2
function rgbColorGenerator() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  
  return `rgb(${r},${g},${b})`;
}
console.log(rgbColorGenerator());

//3
function arrayOfHexaColors(num) {
  let hexColors = [];
  let chars = '0123456789abcdef';

  for (let i = 0; i < num; i++) {
    let color = '#';
    for (let j = 0; j < 6; j++) {
      color += chars[Math.floor(Math.random() * chars.length)];
    }
    hexColors.push(color);
  }

  return hexColors;
}
console.log(arrayOfHexaColors(5));

//4
function arrayOfRgbColors(num) {
  let rgbColors = [];

  for (let i = 0; i < num; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    rgbColors.push(`rgb(${r},${g},${b})`);
  }

  return rgbColors;
}
console.log(arrayOfRgbColors(5));

//5
function convertHexaToRgb(hexa) {

  hexa = hexa.replace('#', '');
  let r = parseInt(hexa.substring(0, 2), 16);
  let g = parseInt(hexa.substring(2, 4), 16);
  let b = parseInt(hexa.substring(4, 6), 16);

  return `rgb(${r},${g},${b})`;
}
console.log(convertHexaToRgb('#ee33df')); 

//6
function convertRgbToHexa(r, g, b) {
  let red = r.toString(16).padStart(2, '0');
  let green = g.toString(16).padStart(2, '0');
  let blue = b.toString(16).padStart(2, '0');

  return `#${red}${green}${blue}`;
}
console.log(convertRgbToHexa(238, 51, 223)); 

//7

//8
function shuffleArray(arr) {
  let array = arr.slice();

  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5])); 

//9
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); 
console.log(factorial(0)); 

//10
function isEmpty(param) {
  if (param === null || param === undefined) return true;

  else if (typeof param === 'string' || Array.isArray(param)) {
    return param.length === 0;
  }

 else if (typeof param === 'object') {
    return Object.keys(param).length === 0;
  }

  return false;
}
console.log(isEmpty(''));
console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty([1, 2, 3]));
console.log(isEmpty('hello'));
console.log(isEmpty(null));
console.log(isEmpty(undefined));

//11
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3)); 
console.log(sum(1, 2, 3, 4)); 
console.log(sum(10, 20, 30, 40, 50));

//12

//13
function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 'Please provide a non-empty array.';
  }

  for (let item of arr) {
    if (typeof item !== 'number') {
      return 'All array items must be numbers.';
    }
  }

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  return sum / arr.length;
}

console.log(average([10, 20, 30, 40]));
console.log(average([5, 10, 15]));
console.log(average([1, '2', 3])); 
console.log(average([]));

//14

//15
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(17));
console.log(isPrime(20));

//16
function isUniqueArray(arr) {
  if (!Array.isArray(arr)) {
    return 'Please provide a valid array.';
  }

  let uniqueItems = new Set(arr);
  return uniqueItems.size === arr.length;
}

console.log(isUniqueArray([1, 2, 3, 4, 5]));
console.log(isUniqueArray([1, 2, 2, 3, 4])); 
console.log(isUniqueArray(['a', 'b', 'c'])); 
console.log(isUniqueArray(['a', 'b', 'a']));

//17
function isSameDataType(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 'Please provide a non-empty array.';
  }

  const firstType = typeof arr[0];

  for (let item of arr) {
    if (typeof item !== firstType) {
      return false;
    }
  }

  return true;
}
console.log(isSameDataType([1, 2, 3, 4])); 
console.log(isSameDataType(['a', 'b', 'c']));
console.log(isSameDataType([1, '2', 3])); 
console.log(isSameDataType([true, false, true]));
console.log(isSameDataType([{}, []])); 

//18
function isValidVariable(name) {
  // const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return pattern.test(name);
}

console.log(isValidVariable('first_name'));
console.log(isValidVariable('first-name'));
console.log(isValidVariable('1first_name'));
console.log(isValidVariable('_firstname'));
console.log(isValidVariable('$varName'));
console.log(isValidVariable('user@name'));

//19
function sevenRandomNumbers() {
  const numbers = [];
  while (numbers.length < 7) {
    const random = Math.floor(Math.random() * 10);
    if (!numbers.includes(random)) {
      numbers.push(random);
    }
  }
  return numbers;
}

console.log(sevenRandomNumbers());

//20
function reverseCountries(countries) {
  const copy = [...countries];
  return copy.reverse(); 
}
const countries = ['Nigeria', 'Ghana', 'Kenya', 'Ethiopia'];
console.log(reverseCountries(countries));
console.log(countries);



