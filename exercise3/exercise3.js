/*---- EXERCISE 3 (EXPLANATION) ----*/

// Array of students

let students = [
  {
    name: "Alejandro",
    lastName: "Martinez",
    grade: "5 GCSES",
    subjects: {
      mathematics: 6,
      english: 5,
      geography: 7,
      economy: 5.5,
      philosophy: 7,
      spanish: 8,
      history: 7,
      art: 5,
    },
  },
  {
    name: "Alberto",
    lastName: "Rossi",
    grade: "5 GCSES",
    subjects: {
      mathematics: 4,
      english: 5,
      geography: 6,
      economy: 3,
      philosophy: 2,
      spanish: 2,
      history: 4,
      art: 5,
    },
  },
  {
    name: "Ana",
    lastName: "Pascual",
    grade: "5 GCSES",
    subjects: {
      mathematics: 1,
      english: 8,
      geography: 6,
      economy: 3,
      philosophy: 7,
      spanish: 5,
      history: 5,
      art: 8,
    },
  },
  {
    name: "Alberto",
    lastName: "Lozano",
    grade: "5 GCSES",
    subjects: {
      mathematics: 8,
      english: 6,
      geography: 4,
      economy: 3,
      philosophy: 7,
      spanish: 6,
      history: 5,
      art: 5,
    },
  },
  {
    name: "Enrique",
    lastName: "Martin",
    grade: "5 GCSES",
    subjects: {
      mathematics: 5,
      english: 6,
      geography: 5,
      economy: 3,
      philosophy: 7,
      spanish: 6,
      history: 5,
      art: 6,
    },
  },
  {
    name: "Marina",
    lastName: "Martinez",
    grade: "5 GCSES",
    subjects: {
      mathematics: 8,
      english: 7,
      geography: 8,
      economy: 7,
      philosophy: 7,
      spanish: 9,
      history: 8,
      art: 7,
    },
  },
  {
    name: "Carla",
    lastName: "Peral",
    grade: "5 GCSES",
    subjects: {
      mathematics: 5,
      english: 6,
      geography: 5,
      economy: 6,
      philosophy: 7,
      spanish: 4,
      history: 5,
      art: 2,
    },
  },
  {
    name: "Jesus",
    lastName: "Haro",
    grade: "5 GCSES",
    subjects: {
      mathematics: 8,
      english: 6,
      geography: 3,
      economy: 4,
      philosophy: 7,
      spanish: 5,
      history: 6,
      art: 7,
    },
  },
  {
    name: "Roberto",
    lastName: "Leal",
    grade: "5 GCSES",
    subjects: {
      mathematics: 2,
      english: 5,
      geography: 5,
      economy: 6,
      philosophy: 5,
      spanish: 6,
      history: 4,
      art: 3,
    },
  },
  {
    name: "Jorge",
    lastName: "Hermoso",
    grade: "5 GCSES",
    subjects: {
      mathematics: 8,
      english: 6,
      geography: 4,
      economy: 7,
      philosophy: 7,
      spanish: 6,
      history: 5,
      art: 6,
    },
  },
  {
    name: "Laura",
    lastName: "Romero",
    grade: "5 GCSES",
    subjects: {
      mathematics: 8,
      english: 6,
      geography: 5,
      economy: 8,
      philosophy: 7,
      spanish: 6,
      history: 5,
      art: 5,
    },
  },
  {
    name: "Paco",
    lastName: "Gil",
    grade: "5 GCSES",
    subjects: {
      mathematics: 8,
      english: 4,
      geography: 4,
      economy: 3,
      philosophy: 3,
      spanish: 4,
      history: 3,
      art: 5,
    },
  },
];
console.warn("Original array of students");
console.log(students);

// STEP 1: create a copy of the original array (students) so that it is not modified by the changes we will make later.

let classStudents = [];

for (const student of students) {
  //We can use var, let or const. I am using const because the properties are not going to change.
  classStudents.push({ ...student });
  //Remember that we use ... to defragment all the properties inside the object, if we don't use it we just do it as a shortcut
  //We use curly braces to indicate that it is an object.
}

console.warn("New array for Students");
console.log(classStudents);

// STEP 2: which students have approved geography? It is considered approved from 5. The result should be 8.

/*
  variable = array.property(variable => {
    return variable.arrayProperties condition
  });
*/

let geographyApproved = classStudents.filter(student => {
  return student.subjects.geography > 4
});

//let geographyApproved = classStudents.filter(student => student.subjects.geography >= 5);

console.warn("Geography Approved");
console.log(geographyApproved);

//The simplest way is to use .filter, but you can get the same result with a simple FOR and with an IF condition

let approvedGeography = [];
for (let i = 0; i < classStudents.length; i++) { // looping through the array, one round for each student
  let student = classStudents[i].subjects.geography // save the student in a variable
  if (student > 4){ // create the condition
    approvedGeography.push(classStudents[i]) // and add the student that matches the condition in the new array
  }
}

console.log(approvedGeography)


// STEP 3: Create a new property for each student called Average Grade, and calculate it.

//IMPORTANT!
/* This step has multiple options when it comes to solving it. We must bear in mind that it is a good practice in programming 
to make a code that is reusable and variable. It could be that not all students had the same subjects so we should code an 
algorithm that would serve all types of students.*/

for (const student of classStudents) { // We first use a FOR OF because it loops through the objects within an array.
  //we initialice the counters to 0
  subjectCounter = 0; //here we are going to save the number of subjects that each student has.
  addGradeCounter = 0; //here we are going to save the total points of all subjects

  for (const subject in student.subjects) { //Now we are using a FOR IN because it loops through the properties within an object.
    // We know that all students have subjects, we use it as a condition knowing that it will always be true, to loop through the subjects.
    if (student.subjects[subject]) { 
      subjectCounter ++; //we are indicating to add 1 to de counter for each loop(subject)
      addGradeCounter = student.subjects[subject] + addGradeCounter; 
      //here we are accessing the value of each subject and adding the points to the counter
    }
  }
  // We create new properties in each student to save the data that we will use later
  student.totalSubjects = subjectCounter;
  student.totalGrades = addGradeCounter;

}

classStudents.forEach(student => {  //FOR EACH works like a FOR OF but with a simple syntax
  // We create a new property in each student and we equate it to the mathematical operation that will give us the average grade of each student
  student.averageGrade  = student.totalGrades/student.totalSubjects; 
  return student
});

console.warn('New property: Average Grade')
console.log(classStudents)
console.warn('Original array: Students')
console.log(students) // Now you can take the opportunity to check the original array, still without modifications.


/* DON'T WORRY IF YOU DIDN'T DO IT AS IN THE CODE ABOVE. As I said before, it is good practice to make a reusable algorithm, 
but the purpose of programming is to give instructions to the computer and get results. If you have achieved the same result 
in another way, that is fine. Here are some equally valid answer: */

// Remember to comment out the code above to correctly check the other valid answers!

// Answer 1:

// classStudents.forEach(student => { 
//   student.averageGrade  = (student.subjects.mathematics + student.subjects.english + student.subjects.economy + student.subjects.philosophy + 
//     student.subjects.spanish + student.subjects.geography + student.subjects.history + student.subjects.art)/8;
//   return student
// });
// console.log(classStudents)

//Answer 2:

// classStudents.forEach(function(student){ 
//   let totalGrades = student.subjects.mathematics + student.subjects.english + student.subjects.economy + 
//                      student.subjects.philosophy + student.subjects.spanish + student.subjects.geography + 
//                      student.subjects.history + student.subjects.art;
//   let totalSubjects = 8
//   return student.averageGrade = totalGrades / totalSubjects;
// });
// console.log(classStudents)

// Answer 3: We can also use a .map, but it is not necessary to create a new array in this step.

// let averageGrade = classStudents.map(student =>{
//   student.averageGrade = (student.subjects.mathematics + student.subjects.english + student.subjects.economy + 
//                           student.subjects.philosophy + student.subjects.spanish + student.subjects.geography + 
//                           student.subjects.history + student.subjects.art)/8;
  
//   return student;
// });
// console.log(averageGrade)


// STEP 4: create two new properties for each student that tells us how many subjects they have passed and how many they have failed.

for ( student of classStudents){
  approvedCounter = 0;
  failedCounter = 0;

  for (subject in student.subjects){
    if(student.subjects[subject] > 4){
      approvedCounter ++; //we are indicating to add 1 to de counter for each loop(subject)
    }else{
      failedCounter ++;
    }
  }
  student.approvedSubjects = approvedCounter;
  student.failedSubjects = failedCounter;
}

console.warn('Approved and Failed Subjects')
console.log(classStudents)


// STEP 5: sort students by last name.

classStudents.sort((studentA, studentB) => { // compare two elements
  lastNameA = studentA.lastName.toUpperCase(); //to ignore upper and lowercase
  lastNameB = studentB.lastName.toUpperCase();
  if(lastNameA < lastNameB){ //If the alphabetical order of its letters is less than that of the other surname with which we compare,
    return -1; // it will subtract a position
  }else if(lastNameA > lastNameB){ // if its more
    return 1; // it will add a position
  }
  return 0;// all functions need a return in this case we put 0 because we are talking about positions (numbers) and 0 means no changes of position
});

console.warn('Sorted by last name')
console.log(classStudents)
console.warn('Comparing with the original array')
console.log(students)
