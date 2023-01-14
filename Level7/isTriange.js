// P integers 
// R a boolean 
// E 
// P 

// if  the sum of two of the sides is greater than the third side then return true 
//all three sets of sides must satisfy the rule 

function isTriangle(a,b,c)
{
  return a + b > c && b + c > a && a + c > b
   
}


console.log(isTriangle(4,8,5))


