//P - a number 
//R -  a number -  the number of times you must multiply the digits in num until you reach a single digit.
//E
    // 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
    // 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//P


//use recursion
function persistence(num  , counter = 0) {

   //1- Establish a base case or a stoping condition
        // if and once the number is a single digit return count
    if(num < 10) {
        return counter;
    } else {
        // create a variable that holds that array with each number as an item  by first turning the number into a string and then using Array.from to turn the string into an array
        //you could also use split to turn string into an array 
        let arrayOfNumbers = Array.from(String(num), Number) 
        //reducer function reduces numbers in array to a single digit 
        let reducedNumber = arrayOfNumbers.reduce( (a , b) =>  a * b)
    //2-return the function (recursion) with a smaller input and increase counter
         return persistence(reducedNumber , counter+=1)
           
    }
    
    
    
   
   
    
    

    

    

    
    
    
   

    

 
   
}


// console.log(persistence(39))



//Solve with while loop

function persistence2(num) {

    let counter = 0;

    while (num > 9) {
        counter++
       num = String(num).split('').reduce((a , b) => a * b)

    }

    return counter
}



console.log(persistence2(999))