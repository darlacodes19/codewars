//P a STRING
//R a STRING
    //has to start with # 
    //every letter of the word has to be capitalized
    //if the string is more than 140 characters long or the string is empty must return false 
//E
    //" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
    //"    Hello     World   "                  =>  "#HelloWorld"
    //""                                        =>  false
//P
    //if string is empty return false 
    //if string length is longer than 140 characters return false
    //trim string 
    //split string into an array
    //join to remove spaces
    //capitalize first letter 
    //join string 



function generateHashtag (str) {

    

//   if (str.length === 0 ) return false 

    
   let finalString =  str.split(' ').map(word =>  word && word[0].toUpperCase() + word.substring(1)).join('')

//    return `#${finalString}`
if (finalString.length === 0 || finalString.length > 139) return false 
return `#${finalString}`
    // return finalString.length === 0 ? false : `#${finalString}`
      


}


console.log(generateHashtag("a".repeat(140)))