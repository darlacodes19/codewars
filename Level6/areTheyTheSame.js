//P -  an array of integers 
//R - true or false if the arrays are the same
    // are the numbers in b the squares of the numbers in a 
//E
    //a = [121, 144, 19, 161, 19, 144, 19, 11]  
    //b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//P
    //sort the integers from highest to lowest
    //loop through both arrays ( you're going to have to do two for loops)
    //check if the integer at b[0] is the square of a[0]
    // if yes, return true
    //if no, return false 






    function comp(a, b){
  
        if ( a == null || b == null) return false 

         let sortedA =  a.map(num => num**2).sort((a,b) => a-b)
         let sortedB = b.sort((a,b) => a-b)
      
         if(JSON.stringify(sortedA)==JSON.stringify(sortedB))
         return true;
        else
         return false
          
      }

   


  


  console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361] ))