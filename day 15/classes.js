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
    super(name, age, color, 4);
  }

//EXERCISE LEVEL2
  bark() {
    return `${this.name} is barking!`;
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, 4);
  }

//EERCISE LEVEL 2
  meow() {
    return `${this.name} is Meowing!`;
  }
}
const dog = new Dog("Rofy", 3, "brown");
console.log(dog.bark());

const cat = new Cat("Kitty", 2, "white");
console.log(cat.meow());


//EXERCISE LEVEL 3
//1

//2
class PeronAccount {
   constructor (firstName, lastName, incomes, expenses) {
      console.log(this)
      this.firstName = firstName;
      this.lastName = lastName;
      this.incomes = new Set();
      this.expenses = new Set();
   }

  addIncome(description, amount) {
    this.incomes.add({ description, amount });
  }

   addExpenses(description, amount) {
    this.expenses.add({ description, amount });
  }

   totalIncome() {
    let total = 0;
    for (const income of this.incomes) {
      total += income.amount;
    }
    return total;
  }

  totalExpense() {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }

  accountInfo() {
    return `
    Person: ${this.firstname} ${this.lastname}
    Total Income: ${this.totalIncome()}
    Total Expense: ${this.totalExpense()}
    Account Balance: ${this.accountBalance()}
    `;
  }
}

