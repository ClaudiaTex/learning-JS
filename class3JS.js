//Use prompt to make an alert and ask to the user to introduce some data
let name = prompt('Introduce your name');

console.log(name)

// CONDITIONAL : IF

// if (name.length > 5) {
//     alert('Your name has more than 5 letters') //this code only will run if the condition is met
// }

//in this case .length counts all the chactersof a string including spaces

// CONDITIONAL : IF-ELSE

if (name.length > 5) {
    alert('Your name has more than 5 letters') //if this condition is not met, it will go to the next one
} else {
    alert('Your name has less than 5 letters')
}

//But, what if the name is just 5 letters long? it will go to: 'Your name has less than 5 letters'
// We can use >= (greater than or equal) on the if condition: if (name.length >= 5)

/* Note that the code is repeated, comment the IF section to see correctly the use of IF-ELSE
 on the console of your browser.*/

 