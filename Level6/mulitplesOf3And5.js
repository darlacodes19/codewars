//P
    // An integer, no limits 
//R
    // find all the multiples of 3 and 5 below the input and return the sum of those numbers 
//E
    // multipls belowe 10 are 3,5,6, and 9, the sum of those numbers is 23 
    //REMINDER it has to be below the number
    //In this case we would not include 10, although it is a mulitple of 5 

//P
    // creae a variable to hold all of the multiples of 3 and 5 in an array 
    //create a for loop that loops through the numebrs starting at 1 upto below the number 
    //if the number passes the test, push into the array 
    //use the reduce method on the array to add them all up 


function solution(number){
 
    const arrayOfNumbers = [];
// example number = 12
//Loop will start at 1 and run untill 11  
    for (let i =1; i<number; i++ ) {
        if(i % 3 === 0 || i % 5 === 0) {
            arrayOfNumbers.push(i)
        }
    }

        
    
    //Declare an intial value of 0 to account for empty arrays 
    return arrayOfNumbers.reduce( (p , c) => p+c , 0)
  }

  console.log(solution(10))



  // Another Solution

  function solution(number){
    var sum = 0;
    for (var i = 3; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
    return sum;
  }