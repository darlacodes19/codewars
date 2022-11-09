//P A string of characters
//R A string, first letter of each word moved to the end + ay 
//E  

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
//P

//split the string into an array of individual words
//map through the array 
//for each element(or word) move the first character of the string to the end
// and add the string ay
//join back to a string of characters/sentence 

//what happens when you have a question maor
function pigIt(str){
    return str.split(' ')
              .map(function(word) {
       
             let firstLetter = word.charAt(0)
             //ensures that only characters from a-z are taken into account
             return  word.match(/[A-z]/i) ? `${word.slice(1)}${firstLetter}ay` : word
      
              })
            .join(' ') 
      
    }


  console.log(pigIt("Hello world!"))