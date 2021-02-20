/* PLEASE NOTE: This class is based on Exercise 1, if you haven't done already, 
 please do it first and come back later.*/


 // Create a CLASS to construct an object.
class product {
    constructor (name, brand, price, type){
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.type = type;
    }
}

//Create objects with property "new product" for our class.

let Xbox = new product('Xbox 360', 'Microsoft', 250, 'Videogames');
let Axe = new product('Axe Blue', 'Axe', 4.5, 'Hygiene');
let IceBlue = new product('Ice Blue', 'Williams', 3.29, 'Hygiene');
let Iphone_X = new product('Iphone_X', 'Mac', 600, 'Computing');
let IMac = new product('IMac', 'Mac', 1400, 'Computing');
let Ball = new product('Breack Bones', 'MiKasa', 36, 'Sports');
let Bike = new product('Bike-BTT', 'ROCKRIDER', 200, 'Sports');
let Newspaper = new product('New York Times', 'NYT', 2, 'Press');

console.warn('Object');
console.log(Axe);

//Put the objects inside an array

let products = [Xbox, Axe, IceBlue, Iphone_X, IMac, Ball, Bike, Newspaper];

console.warn('Array of products');
console.log(products);


/*----- Methods to loop through an array without using FOR-----*/

// forEach: it's like a normal FOR but with different syntax (simpler)
console.warn('FOR EACH');

console.warn('Index position by product');
products.forEach(function(product, index){ 
    // INDEX in case you need to know what specific position the array objects occupy
    product.price = product.price + 100;
    console.log(index, product);
});

console.warn('Product price + 100');
console.log(products);
//It will show us the objects adding 100 to the price of each object

//By working as a normal FOR, we can include conditionals inside {}.

products.forEach(function(product){ 
    if (product.type === 'Hygiene') {
        product.origin = "EEUU";
    }
});

console.warn('Hygiene products are from EEUU');
console.log(products);


// .map: is to modify data from an array and store it in a new one (without modifying the original array)
console.warn('.map');

let objNewPrice = products.map((product, index) =>{
    //Arrow function. When it is a single argument, no parentheses are needed.
    product.newPrice = product.price + 200; //we have created a new property inside the object
    product.index = index;
    return product;//Don't forget: always return something
});

console.log(objNewPrice);

//the DIFFERENCE between FOREACH and MAP is that map creates a new variable (without modifying the original array).

/*PLEASE NOTE: If we did not work with classes in this example, we would not modify the original and 
we could see the two arrays, one unmodified and the other with modifications.*/

//Please check out this example to see how .map works properly.
console.warn('.map does not modify the original array');

let numbers = [1, 5, 10, 15];
let doubles = numbers.map(function(x) {
   return x * 2;
});

console.log(numbers);
console.log(doubles)


/* .find : finds only the FIRSt element that matches our search and returns it. 
As soon as it finds it, it cuts the loop, it does not go through the rest of the objects.*/

let findObj = products.find(product =>{
    return product.type === 'Hygiene'
})

console.warn('.find');
console.log(findObj);

// Short version (1 code line)

let findingObj = products.find(product => product.type === 'Videogames');

console.warn('Short version');
console.log(findingObj);
