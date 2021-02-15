/*------EXERCISE 1 (EXPLANATION)———*/

// STEP 1: Create a CLASS to construct an object.

/* 
class nameClass {
    constructor (name properties){
        this.key = nameProperty;
    }
}
*/

class product {
    constructor (name, brand, price, type){
        //this.(name that we want to assign) to avoid making a mistake we will use same name-value
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.type = type;
    }
}

// STEP 2: Create objects with property "new product" for our class.

/*let Product = new product(values properties);*/

/* Instantiate classes: we add the property values to create the objects manually, usually they come from the database.*/

let Xbox = new product('Xbox 360', 'Microsoft', 250, 'Videogames');
let Axe = new product('Axe Blue', 'Axe', 4.5, 'Hygiene');
let IceBlue = new product('Ice Blue', 'Williams', 3.29, 'Hygiene');
let Iphone_X = new product('Iphone_X', 'Mac', 600, 'Computing');
let IMac = new product('IMac', 'Mac', 1400, 'Computing');
let Ball = new product('Breack Bones', 'MiKasa', 36, 'Sports');
let Bike = new product('Bike-BTT', 'ROCKRIDER', 200, 'Sports');
let Newspaper = new product('New York Times', 'NYT', 2, 'Press');

console.warn('Object');
console.log(Axe)

//STEP 3: Put the objects inside an array

/*let array = [Product variable names];*/

/*Once the objects are instantiated, the variables are entered in the array as we have created them 
(uppercase, lowercase ...) and without quotes, only separated by commas.*/

let products = [Xbox, Axe, IceBlue, Iphone_X, IMac, Ball, Bike, Newspaper];

console.warn('Array of products');
console.log(products);

//STEP 4: Create a copy of the products array that we created in the previous step to obtain two equal arrays. We will need it later.

/* let array = [];*/

let productsVAT = []; //initialize the new array
  
productsVAT.push(...products); 
//the ... defragments the previous array (products), push is to put the objects in a new array

console.warn('Copy of products array');
console.log(productsVAT);


//STEP 5 : Initialize an empty array for Sports.

/* let array = [];*/

let sports = []; //initialize the new array

console.warn('Empty array for Sports');
console.log(sports);


//STEP 6: Put the Sports products inside the new empty array of Sports and remove them from the products array using a loop.

//NOTE THAT: in this section you are going to need to search how to remove an object

/* This loop will rotate until the position is greater than or equal to the amount of products, 
there the loop will stop.

console.warn('Looping through products array');
for (let i = 0; i < products.length; i++) {
    console.log(products[i])
}
*/

/* We create a conditional that locates the object that is of type Sports 
(it will look for it in each position strictly the same as what we write between '')

console.warn('Looking for Sports products positions')
for (let i = 0; i < products.length; i++) {
    if (products[i].type === 'Sports') {
        console.log('Sports in position ' + i)
    }
}
*/

console.warn('Moving sports products to the sports array')
for (let i = 0; i < products.length; i++) {
    if (products[i].type === 'Sports') {
        sports.push(products[i]); // we introduce the resulting objects in the new sports array
        products.splice(i, 1); 
        i--; 
    }
}
console.log(sports);
console.log(products);

/* Note that when we remove an element from the array the positions change, that is why we use i - - to make sure that in each loop the positions are correct. In this case we know that the positions of the sport products are followed, but we will not always know.*/

/* Using SPLICE  we can remove the positions we need for example like this: (i, 2) (2 positions removed). But it’s always better to remove the objects one by one if we are moving them to an other array.*/


// STEP 7: Create two functions to calculate VAT: one to know the VAT of a price, another to Know the price with the VAT applied to the Sports products price by introducing two new properties into the object.

function VAT(price){ //create parameter
    return price * 0.21; // We will return the mathematical formula that we apply, as in mathematics.
}

function priceVAT(price){
    return price + (price * 0.21);
}


for (let sport of sports) {
    // we assign to a new property the value that the function returns
    sport.priceVAT = priceVAT(sport.price);
    sport.VAT = VAT(sport.price);
}

console.warn('VAT CALCULATOR');
console.log(sports)


//STEP 8: Apply the VAT to all products using the copy of the products array that we created in STEP 4.

for (let product of productsVAT) {
    product.priceVAT = priceVAT(product.price);
    product.VAT = VAT(product.price);
}

console.warn('VAT CALCULATOR for all products')
console.log(productsVAT)

/*STEP 9: Create a new property for delivery in the array that have all products using a SWITCH. 
Sports products will be delivered on Mondays, Computing on Tuesdays, 
Hygiene on Wednesdays, Videogames on Thursdays, and the rest on Fridays.*/

  for(let product of productsVAT){
    switch (product.type) {
        // We add a new property to the object, variable depending on another previous property of the object.
        case 'Sports':
            product.delivery = 'Monday';
            break;
        case 'Computing':
            product.delivery = 'Tuesday';
            
            break;
        case 'Hygiene':
            product.delivery = 'Wednesday';
            
            break;
        case 'Videogames':
            product.delivery = 'Thursday';
            
            break;
        default: 
        // in case none of the above cases is true
            product.delivery = 'Friday';
            break;
    }
}

console.warn('All products delivery');
console.log(productsVAT);

