//Pime Number: A natural number greater than 1 that has no positice divisors other than 1 and itself 



//P- an integer positive or negative
//R - a boolean / true if number is prime, false if isn't
//E 
    //1- false
    //2 - ture
    // -1 false
//P
    //if integer is less than or equal to 1 return false
    // if number is only divisble by itslef and 1 without any remianders return true 




    function isPrime (num) {
     if (num === 2) return false
        const limit = Math.sqrt(num);
     for (let i =2; i< limit; i++) {
         if (num % i === 0) {
             return false
         }
     }
        return true 
    }


    console.log(isPrime())