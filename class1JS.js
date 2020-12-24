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

//FUNCTIONS
console.warn("Functions");

let claudia = 7;
let pedro = 5;

function addApples(claudia, pedro) {
  return claudia + pedro;
}

console.log(addApples(claudia, pedro)); //Add

let totalSubstractApples;

function substractApples(claudia, pedro) {
  return claudia - pedro;
}

totalSubstractApples = substractApples(claudia, pedro);

console.log(totalSubstractApples); //Substract

// Its important to understand arguments and the order of the parameters in a fuction

let maria = 7;
let bruno = 5;
let manolo = 37;
let juan = 95;

let total1;
let total2;
let total3;
let total4;

function substract(a, b) {
  return a - b;
}

total1 = substract(manolo, juan);
console.log(total1); // should return 37 - 95 = -58

total2 = substract(juan, manolo);
console.log(total2); // should return 95 - 37 = 58

function mathOperation(a, b, c, d) {
  return a + b - (c - d);
}

total3 = mathOperation(juan, bruno, manolo, maria);
console.log(total3); // should return (95 + 5) - (37 - 7) = 70

function mathOperation2(a, b, c) {
  return a + b - c;
}
total4 = mathOperation(juan, bruno); // a parameter is missing
console.log(total4); // should return NaN

//FOR INSIDE A FUNCTION
console.warn("FOR inside a function");

let students = ["juan", "bruno", "pedro"];

function studentsRunning() {
  //Initialize a function without parameters
  for (student of students) {
    console.log("Running");
    console.log(student);
  }
}
console.log(studentsRunning()); //Call a function without arguments

let students2 = ["maria", "claudia", "bea"];

function students2Running(a) {
  //Initialize a function with parameters give us the posibility to reuse it
  for (student of a) {
    console.log("Running");
    console.log(student);
  }
}
console.log(students2Running(students2)); //Call a function with arguments

//OBJECTS
console.warn("Objects");

let alejandro = {
  name: "alejandro", //name is the key, alejandro is the value
  age: 29,
  alive: true,
  //options for large keys
  "year-of-birth": 1991, //if we dont use "" JS its going to make the math operation
  school_name: "Montesion",
  "year of promotion": 2009,
};
console.log(alejandro);
console.log(alejandro.name);
console.log(alejandro.school_name);
console.log(alejandro["year-of-birth"]);
console.log(alejandro["year of promotion"]); // [] used to search within an object

//Array of objects
console.warn("Array of objects");

let studentsClass = [
  {
    name: "Alejandro",
    age: 29,
    alive: true,
  },
  {
    name: "Mario",
    age: 39,
    alive: true,
  },
  {
    name: "Carmen",
    age: 43,
    alive: true,
  },
];

console.log(studentsClass);

//Loop throught an array of objects

for (student of studentsClass) {
  console.log(student.name);
}

//Edit a value of an object

for (student of studentsClass) {
  student.age = student.age + 5;
  console.log(student.age);
}
