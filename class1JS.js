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
