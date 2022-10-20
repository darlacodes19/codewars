//P - an array with numbers - guaranteed to contain 3 or more
//R - a number - in this case the number that is not like the others 
//E
    // findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    // findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//P
     

//GOAL: Return the unique number in the array 

//The find method returns the first element in the provided array that satisfies the provided testing function. If no values satisy the tesing function, undefined is returned 

//IndexOf - returns the index of the element 
//LasIndexOf- returns the last index at which a given element can be found in the array 


//filter method creates a shallow copy of a portion of a given array, filtered own to just the elements from the given array that pass the test implemented by the function 

function findUniqueNumber (arr) {
    // if the element is in only one index, then it is the unique number 
    //Find the element that only exists in one index                      
    return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item))


   

    

}

console.log(findUniqueNumber([ 1, 1, 1, 2, 1, 1 ]))