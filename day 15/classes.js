//EXERCISE LEVEL 1
//1
class Animal {
   constructor (name, age, color, legs) {
      console.log(this)
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
   }

  bark() {
    return `${this.name} is barking.`;
  }

eat() {
    return `${this.name} is eating.`;
  }
}

//2
class Dog extends Animal {
  constructor(name, age, color, legs) {
  }

  bark() {
    return `${this.name} is barking!`;
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs) {
  }

  meow() {
    return `${this.name} is Meowing!`;
  }
}

