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
    
    let arr = text.toLowerCase().split('')

    const count = {};

    arr.forEach(element => {
      count[element] = (count[element] || 0) + 1;
    });
    
    countArray = Object.entries(count)
    
    return countArray.filter(([key, value]) =>  value >= 2 ).length

   

    
    
  }
  

    
   
  

  console.log(duplicateCount('aA11'))