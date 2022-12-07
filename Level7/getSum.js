// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!


//P - two numbers INTEGERS
//R - an INTEGER the sum of all the integers between and including them 
//E - (1, 0) --> 1 (1 + 0 = 1)
    // (1, 2) --> 3 (1 + 2 = 3)
    // (0, 1) --> 1 (0 + 1 = 1)
    // (1, 1) --> 1 (1 since both are same)
    // (-1, 0) --> -1 (-1 + 0 = -1)
    // (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//P 

    //order numbers 
    //if numbers are the same return the number
    //loop through the numbers once ordered
    //add 

//edge cases => if numbers are the same 


function getSum( a , b ) {

    if (a === b ) return a 

    let sum = 0;

    for (let i = Math.min(a,b) ; i <= Math.max(a,b); i++) {
        sum+=i
    }

    return sum





}

console.log(getSum( 0 , -1))

// //sort 
// let array = [a,b]
// array.sort()
// //destructure values
// let [num1, num2] = array