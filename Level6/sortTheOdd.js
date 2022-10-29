// P -  an array of positive integers 
// R - the same an array, except the odd numbers are sorted in ascending orde, even numbers are left in their original positions 
// E 
    //[7, 1]  =>  [1, 7]
    //["5", 8, 6, "3", 4]  =>  ["3", 8, 6, "5", 4]
    //["9", 8, "7", 6, "5", 4, "3", 2, "1", 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// P 
// filter all odd numbers from array
//sort new array of odd numbers
// use map to loop over each integer in original array
    // if the number is odd, replace with the corespoding element in the original array 

function sortArray(array) {

  let sortedOdd = array.filter( e=> e % 2 != 0).sort((a,b) => a - b)
  //replace any odd values with sorted odd values
  return array.map(e => e%2 ? sortedOdd.shift() : e)


  }


  console.log(sortArray([5, 8, 6, 3, 4])) 