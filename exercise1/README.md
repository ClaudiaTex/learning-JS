*EXERCISE 1 (DIRECTION LINE)*

- STEP 1: Create a CLASS to construct an object.

- STEP 2: Create objects with property "new product" for our class.

      let Xbox = new product('Xbox 360', 'Microsoft', 250, 'Videogames');

      let Axe = new product('Axe Blue', 'Axe', 4.5, 'Hygiene');    

      let IceBlue = new product('Ice Blue', 'Williams', 3.29, 'Hygiene');

      let Iphone_X = new product('Iphone_X', 'Mac', 600, 'Computing');

      let IMac = new product('IMac', 'Mac', 1400, 'Computing');

      let Ball = new product('Breack Bones', 'MiKasa', 36, 'Sports');

      let Bike = new product('Bike-BTT', 'ROCKRIDER', 200, 'Sports');

      let Newspaper = new product('New York Times', 'NYT', 2, 'Press');

- STEP 3: Put the objects inside an array

- STEP 4: Create a copy of the products array that we created in the previous step to obtain two equal arrays. We will need it later.

- STEP 5: Initialize an empty array for Sports.

- STEP 6: Put the Sports products inside the new empty array of Sports and remove them from the products array using a loop.

    NOTE THAT: in this section you are going to need to search how to remove an object

- STEP 7: Create two functions to calculate VAT: one to know the VAT of a price, another to Know the price with the VAT applied to the Sports products price by introducing two new properties into the object.

- STEP 8: Apply the VAT to all products using the copy of the products array that we created in STEP 4.

- STEP 9: Create a new property for delivery in the array that have all products using a SWITCH. 
    Sports products will be delivered on Mondays, 
    Computing on Tuesdays, 
    Hygiene on Wednesdays, 
    Videogames on Thursdays, 
    and the rest on Fridays.


/*------SOME HELP------*/


- STEP 1: Create a CLASS to construct an object.

  
      class nameClass {
         constructor (name properties){
             this.key = nameProperty;
         }
       }
 

-  STEP 2: Create objects with property "new product" for our class.

        let Product = new product(value properties);

        let Xbox = new product('Xbox 360', 'Microsoft', 250, 'Videogames');

        let Axe = new product('Axe Blue', 'Axe', 4.5, 'Hygiene');

        let IceBlue = new product('Ice Blue', 'Williams', 3.29, 'Hygiene');

        let Iphone_X = new product('Iphone_X', 'Mac', 600, 'Computing');

        let IMac = new product('IMac', 'Mac', 1400, 'Computing');

        let Ball = new product('Breack Bones', 'MiKasa', 36, 'Sports');

        let Bike = new product('Bike-BTT', 'ROCKRIDER', 200, 'Sports');

        let Newspaper = new product('New York Times', 'NYT', 2, 'Press');

- STEP 3: Put the objects inside an array

      let productsArray = [Product variable names];

- STEP 4: Create a copy of the products array that we created in the previous step to obtain two equal arrays. We will need it later.

      let array = [];

- STEP 5 : Initialize an empty array for Sports.

      let array = [];

- STEP 6: Put the Sports products inside the new empty array of Sports and remove them from the products array using a loop.

    NOTE THAT: in this section you are going to need to search how to remove an object and its position.

    
        console.warn('Looping through products array');
    
        for (let i = 0; i < products.length; i++) {
    
        console.log(products[i])
        }
    
    
        console.warn('Looking for Sports products positions')
    
        for (let i = 0; i < products.length; i++) {
    
        if (products[i].type === 'Sports') {
        
            console.log('Sports in position ' + i)
            
            }
        }
    

- STEP 7: Create two functions to calculate VAT: one to know the VAT of a price, another to Know the price with the VAT applied to the Sports products price by introducing two new properties into the object.

- STEP 8: Apply the VAT to all products using the copy of the products array that we created in STEP 4.

- STEP 9: Create a new property for delivery in the array that have all products using a SWITCH. 
    Sports products will be delivered on Mondays, 
    Computing on Tuesdays, 
    Hygiene on Wednesdays, 
    Videogames on Thursdays, 
    and the rest on Fridays.
