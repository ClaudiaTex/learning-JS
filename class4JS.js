/*----- EQUALITY OPERATORS -----*/

// !== : Nonidentity operator.

// != : Inequality operator.

// = : Assign a value to a variable.

let numA = 10; //number

let numB = '10'; // string

// == : Compare one data with another without considering the type.

if (numA == numB) {
    console.log('true');
}else {
    console.log('false');
}
//it shows TRUE

// === : STRICTLY equal in type and value.

if (numA === numB) {
    console.log('true');
}else {
    console.log('false');
}
//it shows FALSE

// Normally It's better to use === to make sure that it's equal.
// Note that: 10, 'ten' = false (makes ditinction).
