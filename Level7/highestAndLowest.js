//P - a string of numbers seperated by spaces
//R - a string with the highest and lowest number from the input, seperated by  
//E - 
    //highAndLow("1 2 3 4 5");  // return "5 1"
    // highAndLow("1 2 -3 4 5"); // return "5 -3"
    // highAndLow("1 9 3 4 -5"); // return "9 -5"
//P
    //Create a variable to hold final answer
    //Remove spaces ?
    //split the string at every space into an array with each number as an element
    //order the string from lowest to highest using the sort method 

   




function highAndLow(numbers){

    

    
    let numbersArray = numbers.split(' ').sort(function(a,b) { return a - b } )
    return `${numbersArray[numbersArray.length-1]} ${numbersArray[0]}`

    


    
    

   
    

  }


    // Should  return "5 1"
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))