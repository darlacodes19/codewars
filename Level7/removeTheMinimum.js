//P - an ARRAY of integers
//R - an ARRAY of integers with the lowest number removed
 //RULES - 
    //Given an array of integers, remove the smallest value. 
    //Do not mutate the original array/list. 
    //If there are multiple elements with the same value, remove the one with a lower index. 
    //If you get an empty array/list, return an empty array/list.
//E
    // * Input: [1,2,3,4,5], output = [2,3,4,5]
    // * Input: [5,3,2,1,4], output = [5,3,2,4]
    // * Input: [2,2,1,2,1], output = [2,2,2,1]
//P

//can't use sort 




function removeSmallest(numbers) {
    
    const minValue = Math.min(...numbers)

    
    if(numbers.length > 0) { 
  
    for (let i=0; i<numbers.length; i++) {
        if( numbers[i] === minValue) {
           let removedFirst = numbers.slice(0,i)
           let otherHalf = numbers.slice(i+1)

            let newArray = removedFirst.concat(otherHalf)
            return newArray
        }
       
    }

    } return numbers

  }


  console.log(removeSmallest([]))