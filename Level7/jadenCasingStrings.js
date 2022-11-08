// P - a string of characters 
// R - a string
    // the same string with the first words capitalized 
// E
// P
    //split the string at every space
    //loop though the new array of words
    //at every index(word) select and capitlize the first letter 
    // add the rest of the word
    //join and return 



function  jadenCase (string) {

   return string.split(' ').map(function(word){
       return word.charAt(0).toUpperCase() + word.slice(1)
   }).join(' ')

    

}

//should be My Name Isn't Darlene
console.log(jadenCase("my name isn't darlene"))