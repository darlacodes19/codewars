//Sort a string, each word in the string has a number, which represents its position in the string
//if the input string is empty, return an empty string  

// P a string of many words, each word containing a number 
// R - a string with those same words in order 
// E - "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// P




function order(words){

    //how to keep track of order
    //
    // initilize a variable to store the numbers in an array in their original order 
  const findNumber = words.match(/[1-9]/g);
  //initilize a variable to store each word in an array
  const arrayWords = words.split(' ');
  //empty array
  let result = [];

    // if the string is empty return the string 
  if (words.length === 0) return words;

    //loop through each item in the words array 
  arrayWords.map((item, i) => {
      //what is this counter doing? taking the index and adding 1 and turning it to a string
      //first round counter will be 1 
    let counter = (i + 1).toString()
    
    const index = findNumber.indexOf(counter);
    result.push(arrayWords[index]);
    });
    return findNumber
    return result.join(' ')


   
  }

  console.log(order("is2 Thi1s T4est 3a"))

