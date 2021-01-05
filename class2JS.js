/*EXAMPLE OF NESTED OBJECT*/

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

/*JSON: HOW TO TRANSFORM AN OBJECT IN TO JSON TO SEND INFORMATION QUICKLY*/

let personJson = JSON.stringify(person);
console.log(personJson);

/*JSON: HOW TO TRANSFORM A JSON IN TO A JS OBJECT*/

let personObj = JSON.parse(personJson);
console.log(personObj);
