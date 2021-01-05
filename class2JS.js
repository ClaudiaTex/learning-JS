//EXAMPLE OF NESTED OBJECT
console.warn("Nested Object");

let person = {
  name: "Alejandro",
  age: 29,
  last_name: "Martin",
  city: "Madrid",
  favorite_games: [
    {
      name: "Fifa 20",
      type: "Sports",
    },
    {
      name: "NBA 2020",
      type: "Sports",
    },
    {
      name: "Fornite",
      type: "Battle Royale",
    },
  ],
  car: true,
  model: "Polo",
};
console.log(person);

//JSON: HOW TO TRANSFORM AN OBJECT IN TO JSON TO SEND INFORMATION QUICKLY
console.warn("JSON");

let personJson = JSON.stringify(person);
console.log(personJson);

//JSON: HOW TO TRANSFORM A JSON IN TO A JS OBJECT
console.warn("JS OBJECT");

let personObj = JSON.parse(personJson);
console.log(personObj);

//USING CLASSES TO CREATE MULTIPLE OBJECTS QUICKLY WITH A CONSTRUCTOR
console.warn("CONSTRUCTING OBJECTS BY CLASS");

class player {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
}
//using this. to created a new key

let alejandro = new player("Alejandro", 29, "183cm");
let victor = new player("Victor", 29, "173cm");
//the order of the values ​​is the same as we originally created the keys

console.log(alejandro);
console.log(victor);

//Other example
class team {
  constructor(name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
  }
}

let atleticoMadrid = new team("Atletico de Madrid", "Madrid", 1903);

console.log(atleticoMadrid);
//check that the order of keys showing on the console browser is alphabetically

//HOW TO FIND PROPERTIES INSIDE OF AN OBJECT
console.warn("Searching properties");

let searcher = {
  name: "Alejandro",
  age: 29,
  last_name: "Martin",
  city: "Madrid",
  favorite_games: [
    {
      name: "Fifa 20",
      type: "Sports",
    },
    {
      name: "NBA 2020",
      type: "Sports",
    },
    {
      name: "Fornite",
      type: "Battle Royale",
    },
  ],
  car: true,
  model: "Polo",
};

console.log(searcher.last_name);
console.log(searcher.favorite_games);

//...DESTRUCTURING AN OBJECT BY CLASSES
console.warn("Destructuring objects");

let { name, age, ...rest } = searcher;

console.log(name);
console.log(age);
console.log(rest);
//check the keys name and age aren't in the rest object in the browser console
