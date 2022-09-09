//P
    // A string of lower case letters, can include spaces 
//R
    //A NUMBER 
    //The number of vowels in the string 
    //A E I O U 
//E
    //No examples provided 
    //My own -examples 
    // darlene => 3 
//P
    //split the string into an array, filter the vowels
    //return the length of the new array 


function getCount(str) {

return str.split('').filter(e => e === 'a' || e === 'e' || e ==='i' || e === 'o' || e === 'u').length

  }

  console.log(getCount('darlene'))