//P - two Strings
//R - a combination of the two strings sorted and no duplicates
//E - 
//P


function longest(s1, s2) {
    
//joined two strings
   let joinedWord = s1.concat(s2)
//removede duplicates
   let removedDuplicates = joinedWord.split('').filter(function(value, index, self) { 
    return self.indexOf(value) === index;
}).join('');

//sort strings 

   return removedDuplicates

  }


  console.log(longest('hello' , 'world'))