//Your task is to write a function that takes a string and return a new string with all vowels removed.

//P -A string 
//R - A string with no vowels
    // Vowels: a, e, i, o ,u 
//E // This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"
//P 



function disemvowel(str) {
    return str.replace(/[aeiou]/gi,'')
  }

//   console.log(disemvowel("This website is for losers LOL!"))

// try to solve without Regular expressions 
function disemvowel2(str) {

  
  }

  console.log(disemvowel2('pizze'))