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

/*-----BINARY LOGICAL OPERATORS-----*/

// && : When we want to ask several things we use AND (&&). It's for all to be fulfilled.

/*
let gameNumber = prompt('Write a number between 1 and 5');
let gameNumber2 = 5;

if(gameNumber == 2 && gameNumber2 == 5) {
    alert('Well done! The number was 2');
}
//only with number 2 you win.
*/

// || : When we want to ask between several things we use OR (||). With a single match will enter.

let gameNumber = prompt('Write a number between 1 and 5');
let gameNumber2 = 3;

if(gameNumber == 2 || gameNumber2 == 5){
    console.log('Well done! the number was 2')
}
//only with number 2 you win.

/* Remember to comment the && section to correctly see the example of || in your browser's console.*/