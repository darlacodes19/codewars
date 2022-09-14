//P - a number- a non-negative integer 
//R - Digital root- is the sum of all of the digits in the number, return the sum of the digits in n
//  - Continue reducing until a single number is produced 
//E
    // 16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//    132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//    493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
//P

//Recursion -  any situation where you do something, and dpeedning on the results, you might do it again 
//In programming recursion occurs when a function calls itslef 

// Recursive functions have two parts: 
// 1) The recursive call to the function
// 2) At least one condition to exit  

function digitalRoot(n) {
 //Base case-stoppig condition   
    if (n < 10) {
        return n
// recursive 
    } else {
        // create an array of each digit 
        const numbersArray =  (n + '').split('').map((i) => { return Number(i); })
        //reuced by adding all of the digits 
        const reducedNumber = numbersArray.reduce((a, p) => a + p)
        //
        return digitalRoot(reducedNumber)
        
        
    }
  }

  console.log(digitalRoot(942))