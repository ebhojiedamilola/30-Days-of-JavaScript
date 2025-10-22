//EXERCISE LEVEL 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
//1
const emptySet = new Set()
console.log(emptySet)

//2
const numberSet = new Set()
for (let i = 0; i <= 10; i++) {
  numberSet.add(i)
}
console.log(numberSet)

//3
numberSet.delete(5)
console.log(numberSet)

//4
numberSet.clear()
console.log(numberSet)


//5
const fruits = ['apple', 'banana', 'cherry', 'mango', 'orange']
const fruitSet = new Set(fruits)
console.log(fruitSet)

//6
const countryMap = new Map()

for (const country of countries) {
  countryMap.set(country, country.length)
}

console.log(countryMap)

//EXERCISE LEVEL 2
//1
const union = new Set([...a, ...b])
console.log(union)

//2
const intersection = new Set(a.filter(num => b.includes(num)))
console.log(intersection)

//3
const difference = new Set(a.filter(num => !b.includes(num)))
console.log(difference)

//EXERCISE LEVEL 3
//1
const allLanguages = countries.flatMap(country => country.languages)
const uniqueLanguages = new Set(allLanguages)

console.log(`Total number of languages: ${uniqueLanguages.size}`)

//2
