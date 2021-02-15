/*------EXERCISE 1 (SOLUTION)------*/

// STEP 1: Create a CLASS to construct an object.
class product {
    constructor (name, brand, price, type){
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.type = type;
    }
}

// STEP 2: Create objects with property "new product" for our class.

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

let products = [Xbox, Axe, IceBlue, Iphone_X, IMac, Ball, Bike, Newspaper];

console.warn('Array of products');
console.log(products);

//STEP 4: Create a copy of the products array that we created in the previous step to obtain two equal arrays. We will need it later.

let productsVAT = []; 
  
productsVAT.push(...products);

console.warn('Copy of products array');
console.log(productsVAT);

//STEP 5 : Create and initialize an empty array for SPORTS.

let sports = [];

console.warn('Empty array for Sports');
console.log(sports);

//STEP 6: Put the Sports products inside the new empty array of Sports and remove them from the products array using a loop.

console.warn('Moving sports products to the sports array')
for (let i = 0; i < products.length; i++) {
    if (products[i].type === 'Sports') {
        sports.push(products[i]);
        products.splice(i, 1);
        i--;
    }
}
console.log(sports);
console.log(products);


// STEP 7: Create two functions to calculate VAT: one to know the VAT of a price, another to Know the price with the VAT applied to the Sports products price by introducing two new properties into the object.

function VAT(price){
    return price * 0.21;
}

function priceVAT(price){
    return price + (price * 0.21);
}


for (let sport of sports) {
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
            product.delivery = 'Friday';
            break;
    }
}

console.warn('All products delivery');
console.log(productsVAT);

