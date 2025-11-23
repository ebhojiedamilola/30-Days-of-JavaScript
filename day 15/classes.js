//EXERCISE LEVEL 1
//1
class animal {
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
