//P
    //A string of one or more words. 
    //Strings will consists of only letters and spaces. 
    //Spaces will be included only when more than one word is present. 
//R
    //Return the same string, excpet reverse everyword that has more than 5 letters. 
//E
    //spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
    // spinWords( "This is a test") => returns "This is a test" 
    // spinWords( "This is another test" )=> returns "This is rehtona test"
//P
    //split string into an array
    //map method
    //if word is 5 letters ore more reverse the word



function spinWords(string){
    //split string into an array of words
    let wordArray = string.split(' ')
// loop through array 
    for(let i =0; i<wordArray.length; i++) {
        //if the length of the word is greater than or equal to 5
        //create a variable to save changed word
        //split the word into individual letters
        //reverse array of letters
        //join the reversed letters
        //change value of the word to the new variable set
        if(wordArray[i].length >= 5) {
            let reverseWord = wordArray[i].split('').reverse().join('')
            wordArray[i] = reverseWord
        }
    }
    //join the array to output a string
    return wordArray.join(' ')




    
  }

//   console.log(spinWords("This is another test"))


  // Using map

  function spinWords2(string){
      //split string into an array of words
let wordArray = string.split(' ')
//use map to apply a function to each word that passes the test 
return wordArray.map(word =>  word.length >=5 ? word.split('').reverse().join('') : word).join(' ')



    
  }

  console.log(spinWords2("This is another test"))