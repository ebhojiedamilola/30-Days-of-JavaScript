//EXERCISE LEVEL 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//1
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

//2
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor)

//3
const {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter)

//EXERCISE LEVEL 2
//1
for (const { name, scores, skills, age } of users) {
  console.log({ name, scores, skills, age });
}

//2
for (const { name, skills } of users) {
  if (skills.length < 2) {
    console.log(name);
  }
}

//EXERCISE LEVEL 3
//1
const countries0 = [
  {
    name: 'Finland',
    capital: 'Helsinki',
    population: 5540720,
    languages: ['Finnish', 'Swedish']
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    population: 10353442,
    languages: ['Swedish']
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    population: 5421241,
    languages: ['Norwegian']
  }
];
for (const { name, capital, population, languages } of countries0) {
    console.log(name, capital, population, languages )
}

//2
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  const [name, skills, [, , jsScore, reactScore]] = student
  console.log(name, skills, jsScore, reactScore)

  //3