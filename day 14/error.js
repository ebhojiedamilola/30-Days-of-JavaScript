try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}

try {
   let name = 'dami';
   let details = age + ' ' + name
} catch (err) {
   console.log('Name of error', err.name)
   console.log('Error message', err.message)
} finally {
   console.log('In any case I will be executed')
}

let firstName = 'Dami'
let fullName = firstName + ' ' + lastName
console.log(fullName)

let square = 2 * 2
console.log(square)
console.log('Hello, world")

let num = 70
console.log(num.toLowerCase())