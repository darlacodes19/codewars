//P- Number
//R-  A number Square every digit in the number 
//E - For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 8^1 and 12 is 1.
//P 
// create a array of all digits in the number 
//


function squareDigits(num){

   let numbers = parseInt((num + '').split('').map((i) => { return i**2; }).join(''));
   return numbers
    
  }


  console.log(squareDigits(9119))