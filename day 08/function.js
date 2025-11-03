//EXERCISE LEVEL 1
// 1
const dog = {};

// 2
console.log(dog);

//3
dog.name = 'Rophy';
dog.legs = 4;
dog.age = 1;
dog.color = 'brown';
dog.bark = function () {
  return 'woof woof';
};
console.log(dog.bark());

//4
dog.name = 'Rophy';
dog.legs = 4;
dog.age = 1;
dog.color = 'brown';
dog.bark = function () {
  return 'woof woof';
};
console.log(dog.bark());

//5
dog.breed = 'German Sheperd';
dog.getDogInfo = function () {
  return `The dog's name is ${this.name}. It has ${this.legs} legs. It is ${
    this.age
  } years old. It is ${this.color} color. It barks ${this.bark()}`;
};

console.log(dog.getDogInfo());

//EXERCISE LEVEL 2
//1
let mostSkilledPerson = '';
let maxSkills = 0;
const users1 = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

for (const user in users1) {
  const skillCount = users1[user].skills.length;
  if (skillCount > maxSkills) {
    maxSkills = skillCount;
    mostSkilledPerson = user;
  }
}

console.log(`${mostSkilledPerson} has the most skills (${maxSkills} skills).`);


//2
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let loggedInCount = 0;
let highPointsCount = 0;
for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users[user].points >= 50) {
    highPointsCount++;
  }
}
console.log(`Logged in users: ${loggedInCount}`);
console.log(`Users with >= 50 points: ${highPointsCount}`);

//3
let mernStackDeveloper = [];
for (const user in users) {
    const skills = users[user].skills;
    if (
    skills.includes('MongoDB') &&
    skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node')
  ) {
    mernStackDeveloper.push(user);
  }
}
console.log(`people who are MERN stack developer: ${mernStackDeveloper}`)

//4
const newUser = {
  Damilola: {
    email: 'damilola@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: true,
    points: 60
  }
}
console.log(newUser);

//5
const keys = Object.keys(users)
console.log(keys)

//6
const values = Object.values(users)
console.log(values)

//7


//EXERCISE LEVEL 3
//1

//2
    const users3 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    function signUp(username, email, password) {
  const existingUser = users3.find(user => user.email === email);
  if (existingUser) {
    console.log('User already has an account.');
    return;
  }
  const newUser = {
    id: Math.random().toString(36).substring(2, 8),
    username,
    email,
    password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false
  };
  users3.push(newUser);
  console.log('User registered successfully.');
}

//2b
function signIn(email, password) {
  const user = users3.find(user => user.email === email && user.password === password);
  if (user) {
    user.isLoggedIn = true;
    console.log('User signed in successfully.');
  } else {
    console.log('Invalid email or password.');
  }
}

//3
    const users0 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products0 = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function rateProduct(productId, userId, rating) {
  const product = products0.find(p => p._id === productId);
  if (!product) {
    console.log('Product not found.');
    return;
  }

  const existingRating = product.ratings.find(r => r.userId === userId);
  if (existingRating) {
    existingRating.rate = rating;
  } else {
    product.ratings.push({ userId, rate: rating });
  }

  console.log('Product rated successfully.');
}

//3b
function averageRating(productId) {
  const product = products0.find(p => p.id === productId);
  if (!product || product.ratings.length === 0) return 0;

  const total = product.ratings.reduce((sum, r) => sum + r.rate, 0);
  return (total / product.ratings.length).toFixed(2);
}

//4
    const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products2 = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function likeProduct(productId, userId) {
  const product = products2.find(p => p._id === productId);
  if (!product2) {
    console.log('Product not found.');
    return;
  }

  const index = product.likes.indexOf(userId);
  if (index === -1) {
    product.likes.push(userId);
    console.log('Product liked.');
  } else {
    product.likes.splice(index, 1);
    console.log('Like removed.');
  }
}
      
function likeProduct(productId, userId) {
  const product = products2.find(p => p._id === productId);
  if (!product) {
    console.log('Product not found.');
    return;
  }

  const index = product.likes.indexOf(userId);
  if (index === -1) {
    product.likes.push(userId);
    console.log('Product liked.');
  } else {
    product.likes.splice(index, 1);
    console.log('Like removed.');
  }
}
likeProduct('aegfal', 'ab12ex');          


