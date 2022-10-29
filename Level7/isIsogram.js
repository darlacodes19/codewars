//P
    //A string of letters
//R
    //Return true if the string has no repeating letters 
    //false if it does 
//E
    //"Dermatoglyphics" --> true 
    //"aba" --> false 
    //"moOse" --> false (ignore letter case)
//P
    //make each letter lowercase 
    //How to check for repeating letters in a string? 


function isIsogram(str){
    
    let lowercase = str.toLowerCase()

    return !/(.).*\1/.test(lowercase)


    


  }


  console.log(isIsogram("dad"))