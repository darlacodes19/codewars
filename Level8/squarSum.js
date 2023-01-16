//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//P an array
//R number 
//E
    //For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
//P
//for each or map to square each item in the array
//reduce method to add all numbers 

//empty array ?  


function squareSum(numbers){

    if (numbers.length == 0) return 0

   return numbers.map(number => {
        return number**2
    })
    .reduce((pre , curr ) =>  {
        return pre + curr
    });


}


console.log(squareSum([]))