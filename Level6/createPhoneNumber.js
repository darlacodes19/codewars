//P
    //An array of 10 INTEGERS (always 10) between 0 and 9
//R
    //Display numbers in a phone number format (xxx) xxx-xxxx
    //should be a STRING

//E
    //createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//P
    //access each number at its index and concatenate together 



function createPhoneNumber(numbers){
  
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`

}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))