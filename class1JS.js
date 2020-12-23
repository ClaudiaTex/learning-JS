//VAR, LET & CONST
var name = "pedro"; //string

let friend = true; //boolean

const age = 28; //number

//ARRAYS

let array = ["pedro", "pablo", 18, 25, true];

console.log(array);
console.log(array.length);

//FOR: loop through an array
console.warn("FOR");

for (let i = 0; i < 5; i++) {
  console.log(array[i]);
}

for (let i = 0; i < array.length; i++) {
  console.log("Im learning");
  console.log(array[i]);
}

//FOR IN
console.warn("FOR IN");

let people = ["pedro", "pablo", "maria"];

for (let person in people) {
  console.log(people[person]);
}

//FOR OF
console.warn("FOR OF");

let persons = ["pedro", "pablo", "maria"];

for (let person of persons) {
  console.log(person);
}

//LOOP THROUGH ONLY HALF ARRAY

console.warn("HALF ARRAY FOR");

let persons2 = ["pedro", "pablo", "maria"];
let halfloop = persons2.length / 2;

for (let i = 0; i < halfloop; i++) {
  console.log("Im learning loops");
  console.log(persons2[i]);
}

//PUSH (Add an element to THE END of the array)

console.warn("ADD NEW ELEMENT");

persons2.push("Claudia");

console.log(persons2);

//UNSHIFT (Add an element to THE BEGINNING of the array)

let newPerson = "Daniel";

persons2.unshift(newPerson);

console.log(persons2);

//Add elements to an empty array

let emptyArray = new Array();

console.warn("Im empty");
console.log(emptyArray);

for (let i = 0; i < persons2.length; i++) {
  emptyArray.push(persons2[i]);
}

console.warn("Im full");
console.log(emptyArray);
