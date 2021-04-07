*EXERCISE 2 (DIRECTION LINE)*

IMPORTANT! To do this exercise it is necessary to have completed CLASS 5.

- STEP 1: Create an array that returns the movie titles.

- STEP 2: Create an array of movies whose popularity is greater than 100,000

- STEP 3: Create an array that returns the first movie with a vote value greater than 8

- STEP 4: Create an array with the movie with the highest number of votes (comparative)


/*------SOME HELP------*/


- STEP 1: Create an array that returns the movie titles.

        let newArray = originalArray.map(variable => {
            return what we ask for?
        });


- STEP 2: Create an array of movies whose popularity is greater than 100.000

  Remember what property we have seen in class 5 that returns ALL elements that match a condition.

  We have seen: .map, .find, .filter, .reduce and .includes. Remember that all of them create a new array.
  
            let newArray = originalArray.property(variable => {
              return condition
          });
  
  To make the condition use: popularity.
  ! Note that the popularity numbers has a dot, create the condition with 100.000
  
        
- STEP 3: Create an array that returns the first movie with a vote value greater than 8

  Remember what property we have seen in class 5 that returns the FIRST element that matches a condition.
  
            let newArray = originalArray.property(variable => {
                return condition
            });
  To make the condition use: vote_average.
            
- STEP 4: Create an array with the movie with the highest number of votes (comparative)

  FIRST, you need to make a comparison using the correct property we saw on class 5 to get the maximun number of votes.
  
          let newArray = originalArray.property((accumulator, variable)=>{
              if(accumulator < numberOfVotes){
                return accumulator = numberOfvotes; 
              } else {
                return accumulator;
              }
          },initializingAccumulator);
          
  To make the condition use: vote_count.
          
  SECOND, you have to get the FIRST movie (object) that has this number of votes.

            let newArray = originalArray.property(variable => {
                return condition
            });
