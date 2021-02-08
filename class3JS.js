//Use prompt to make an alert and ask to the user to introduce some data
let name = prompt('Introduce your name');

console.log(name)

// CONDITIONAL : IF

// if (name.length > 5) {
//     alert('Your name has more than 5 letters') //this code only will run if the condition is met
// }

//in this case .length counts all the chactersof a string including spaces

// CONDITIONAL : IF-ELSE

// if (name.length > 5) {
//     alert('Your name has more than 5 letters') //if this condition is not met, it will go to the next one
// } else {
//     alert('Your name has less than 5 letters')
// }

//But, what if the name is just 5 letters long? it will go to: 'Your name has less than 5 letters'
// We can use >= (greater than or equal) on the if condition: if (name.length >= 5)

/* Note that the code is repeated, comment the IF section to see correctly the use of IF-ELSE
 on the console of your browser.
*/

// NESTED IF-ELSE

// if(name === 'Alex') {
//     console.log('Hello Alex');
//     if(name === 5){
//         console.log('Your name has 5 letters');
//     }else {
//         console.log ('Your name has 4 letters')
//     }
// }else {
//     console.log('You are not Alex')
// }

/* Note that the code is repeated, comment the IF-ELSE section to see correctly the use of nested 
 IF-ELSE on the console of your browser.
*/

// CONDITIONAL : ELSE-IF

// if (name.length > 5) {
//     alert('Your name has more than 5 letters') 
// } else if(name.length === 5){
//     alert('Your name has 5 letters')
// }else{
//     alert('Your name has less than 5 letters')
// }

// We can nest as many ELSE-IF as we need

/* Note that the code is repeated, comment the NESTED IF-ELSE section to see correctly 
the use of ELSE-IF on the console of your browser.
*/

//CONDITIONAL: SWITCH

/*
switch (key) {
    case value:
    
        break;

    default:
        break;
}
*/

//EXAMPLE 1:

switch (name) { //variable that we want to access
    case 'Alejandro':
        console.log(`Hello ${name}`); 
        // to convert variables to a string: blacktips (``), $ and open {}
        break;
    case 'Cesar':
        console.log(`Hola ${name}`);
        break;
    case 'Lola':
        console.log(`Hola ${name}`);
        break;
    default:
        console.log('Hello world')
        break;
}