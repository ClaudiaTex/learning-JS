/*---- EXERCISE 3 (SOLUTION) ----*/

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
  classStudents.push({ ...student });
}

console.warn("New array for Students");
console.log(classStudents);

// STEP 2: which students have approved geography? It is considered approved from 5. The result should be 8.

let geographyApproved = classStudents.filter(student => student.subjects.geography >= 5);

console.warn("Geography Approved");
console.log(geographyApproved);

// STEP 3: Create a new property for each student called Average Grade, and calculate it.


for (const student of classStudents) { 
  subjectCounter = 0;
  addGradeCounter = 0;
  for (const subject in student.subjects) {
    if (student.subjects[subject]) { 
      subjectCounter ++;
      addGradeCounter = student.subjects[subject] + addGradeCounter; 
    }
  }
  student.totalSubjects = subjectCounter;
  student.totalGrades = addGradeCounter;
}

classStudents.forEach(student => student.averageGrade  = student.totalGrades/student.totalSubjects);

console.warn('New property: Average Grade')
console.log(classStudents)
console.warn('Original array: Students')
console.log(students)


// STEP 4: create two new properties for each student that tells us how many subjects they have passed and how many they have failed.

for ( student of classStudents){
  approvedCounter = 0;
  failedCounter = 0;

  for (subject in student.subjects){
    if(student.subjects[subject] > 4){
      approvedCounter ++;
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

classStudents.sort((studentA, studentB) => {
  lastNameA = studentA.lastName.toUpperCase();
  lastNameB = studentB.lastName.toUpperCase();
  if(lastNameA < lastNameB){
    return -1;
  }else if(lastNameA > lastNameB){
    return 1;
  }
  return 0;
});

console.warn('Sorted by last name')
console.log(classStudents)
console.warn('Comparing with the original array')
console.log(students)
