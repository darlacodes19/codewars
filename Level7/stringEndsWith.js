//P - two strings
//R - a boolean 
//E

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
//P

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).




function solution(str, ending){

    
   const stringEnding = ending.length

   if (ending == "") return true

   return str.slice(-stringEnding) === ending


  }


  console.log(solution('abc', ''))