//P-a string of letters(lowercase and uppercase) and numbers 
//R- A number with the the count of the characters and numbers that repeat itself 
//E-
    //"abcde" -> 0 # no characters repeats more than once
    // "aabbcde" -> 2 # 'a' and 'b'
    // "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    // "indivisibility" -> 1 # 'i' occurs six times
    // "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    // "aA11" -> 2 # 'a' and '1'
    // "ABBA" -> 2 # 'A' and 'B' each occur twice
//P

// first make input all lowercase
//set up a count variable to keep track
// loop through the string
//if the previos and current match than increse count - only works if they are next to eachother 

function duplicateCount(text){
    //create an array of letters all lowercased 
    let arr = text.toLowerCase().split('')
    //create an empty object
    const count = {};
    //fill in the object by looping through each element in the array,
    //each letter becomes a key, if the key doesn't exists it sets the value to zero
    //if the letter does exists in the object, it increases the value by 1
    arr.forEach(element => {
      count[element] = (count[element] || 0) + 1;
    });
    //turn object into array to filter
    countArray = Object.entries(count)
    //filter array and return length 
    return countArray.filter(([key, value]) =>  value >= 2 ).length

   

    
    
  }
  

    
   
  

//   console.log(duplicateCount('aA11'))



  function duplicateCount2(text){
    return text.toLowerCase().split('')
    .filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    });
  }



  console.log(duplicateCount2("aabbcde"))