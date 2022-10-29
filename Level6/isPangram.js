// P - A string- a sentence
// R -  true if the string uses all the letters of the alphabet and false if it doesn't

// E 
// P 
    //remove all spaces from the string
    //lowercase all letters
    //remove duplicates
    //alphabetical order
    //compare 







function isPangram (string) {





    let oderedString =  string
    .replace(/[^a-z]/gi, '')
    .toLowerCase().split('')
    .filter(function(value,index,self) {
        return self.indexOf(value) === index
    })
    .sort()
    .join('')



   return oderedString === 'abcdefghijklmnopqrstuvwxyz'



}

// console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"))

function isPangram2(string){

    return 'abcdefghijklmnopqrstuvwxyz'
    //turn the string into an array of letters 
      .split('')
    //check if the string given includes every letter 
        .every((x) => string.toLowerCase().includes(x));
  }


  console.log(isPangram2("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"))