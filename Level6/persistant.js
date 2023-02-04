//P - a number 
//R -  a number -  the number of times you must multiply the digits in num until you reach a single digit.
//E
    // 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
    // 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//P


//use recursion
function persistence(num  , counter = 0) {


    

    if(num < 10) {
        return counter;
    } else {
        
        let arrayOfNumbers = Array.from(String(num), Number) 
        let reducedNumber = arrayOfNumbers.reduce( (preValue , currValue) =>  {
        return preValue * currValue
        } )

         return persistence(reducedNumber , counter+=1)
        
          
       
    }
    
    
    
   
   
    
    

    

    

    
    
    
   

    

 
   
}


console.log(persistence(39))