*EXERCISE 3 (DIRECTION LINE)*

- STEP 1: create a copy of the original array (students) so that it is not modified by the changes we will make later.

- STEP 2: which students have approved geography? It is considered approved from 5. The result should be 8.

- STEP 3: create a new property for each student called Average Grade, and calculate it. Try to make a reusable algorithm!

- STEP 4: create two new properties for each student that tells us how many subjects they have passed and how many they have failed.

- STEP 5: sort students by last name.


/*------SOME HELP------*/

- STEP 1: create a copy of the original array (students) so that it is not modified by the changes we will make later.

  Remmeber that we need to use a FOR and PUSH.

          for (variable of array) {
          array.push({...variable});
          }

  Note that this array have a nested objects!

- STEP 2: which students have approved geography? It is considered approved from 5.

  Remember all the properties we have seen before: .sort, .pop, .forEach, .find, .filter, .map, .reduce ...
  
      variable = array.property(variable => {
        return variable.arrayProperties condition
      });
      
  The result should be 8.
  
- STEP 3: create a new property for each student called Average Grade, and calculate it. Try to make a reusable algorithm!

  IMPORTANT!
  This step has multiple options when it comes to solving it. We must bear in mind that it is a good practice in programming 
  to make a code that is reusable and variable. It could be that not all students had the same subjects so we should code an 
  algorithm that would serve all types of students.

      for ( variable of array){
        counter = 0;
        for (variable in array){
          if(condition){
            counter 
          }
        }
        variable.newProperty = counter;
      }

  Remember all the properties we have seen before: .sort, .pop, .forEach, .find, .filter, .map, .reduce ...
  
  We dont need to create a new array... 

      array.property(function(variable){
        return variable.newProperty = totalGrades / totalSubjects;
      });
      

- STEP 4: create two new properties for each student that tells us how many subjects they have passed and how many they have failed.

  We can do it with a similar algorithm to the step above.

      for ( variable of array){
        counter = 0;

        for (variable in array){
          if(condition){
            counter1 
          }else{
            counter2
          }
        }
        variable.newProperty = counter;
      }

- STEP 5: sort students by last name.

      items.sort(function(a, b) {
        var nameA = a.name.toUpperCase();  
        var nameB = b.name.toUpperCase();  //ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
