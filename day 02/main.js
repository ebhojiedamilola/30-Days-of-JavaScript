// EXERCISE LEVEL 1 //
//1
const challenge = "30 Days of JavaScript";

//2
console.log(challenge)

//3
console.log(challenge.length)

//4
const str = "30 Days of JavaScipt";
console.log(str.toUpperCase()); 

//5
console.log(str.toLowerCase()); 

//6
console.log(str.substring(0, 2)); 

//7
console.log(str.substring(3));

//8
console.log(str.includes("Script")); 

//9
console.log(str.split()); 

//10
console.log(str.split(" ")); 

//11
console.log(str.split(', '));

//12
console.log(str.replace("JavaScript", "Python")); 

//13
console.log(str.charAt(15)); 

//14
console.log(str.charCodeAt(str.indexOf('J'))); 

//15
console.log(str.indexOf('a')); 

//16
console.log(str.lastIndexOf('a')); 

//17
const sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf('because')); 

//18
console.log(sentence.lastIndexOf('because')); 

//19
console.log(sentence.search('because')); 

//20
console.log(str.trim()); 

//21
console.log(str.startsWith('30 Days'));

//22
console.log(str.endsWith('JavaScipt'));

//23
console.log(str.match('a'));

//24
const str1 = "30 Days of ";
const str2 = "JavaScript";
console.log(str1.concat(str2));

//25
console.log(str.repeat(2));


// EXERCISE LEVEL 2 //
//1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.'");

//2
console.log('"Love is not patronizing and charity isnt about pity, it is about love."');

//3
const Num = '10';
console.log(typeof Num === typeof 10);
const num = parseInt(Num);
console.log(typeof num == typeof 10)

//4
const floatNum = parseFloat('9.8');
console.log(floatNum == 10);
floatNum1 = Math.round(floatNum)
console.log(floatNum == 10)

//5
console.log('python'.includes('on') && 'jargon'.includes('on'));

//6
const sentence1 = 'I hope this course is not full of jargon';
console.log(sentence1.includes('jargon'));

//7
let randomnumber = Math.floor(Math.random() * 100);
console.log(randomnumber);

//8
let randomnumber2 = Math.floor(Math.random() * 50) + 50;
console.log(randomnumber2);

//9
let randomnumber3 = Math.floor(Math.random() * 254);
console.log(randomnumber3);

//10
const str3 = "JavaScript";
const randomnum = Math.floor(Math.random() * str3.length);
console.log(str3[randomnum]);

//11
console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");

//12
const sentence2 = "You cannot end a sentence with because because because is a conjunction";
let result = sentence2.replace("because because because", "");
console.log(result);


// EXERCISE LEVEL 3 //
//1
const sentence3 = "Love is the best thing in this world.Some found their love and some are still looking for their love.";
const countLove = sentence3.match(/love/gi).length;
console.log(countLove);

//2
const sentence4 = "You cannot end a sentence with because because because is a conjuction";
const countBecause = sentence4.match(/because/g).length;
console.log(countBecause);

//3
const sentence5 =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const cleanPattern = /[^a-zA-Z0-9 ]/gi;

const cleanedSentence = sentence5.replace(cleanPattern, '');
console.log(cleanedSentence);
const cleanedSentenceArray = cleanedSentence.split(' ');
console.log(cleanedSentenceArray);

const mostFrequent = cleanedSentenceArray.reduce(
  (prev, curr, index, arr) =>
    arr.filter((item) => item === prev).length >=
    arr.filter((item) => item === curr).length
      ? prev
      : curr,
  null
);

console.log(mostFrequent);

//4

