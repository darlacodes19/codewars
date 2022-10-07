//P
    // an integer can be positive or negative
//R
    // if perfect square - true if not- false
//E
    //    3  =>  false
    //  4  =>  true
    // 25  =>  true
//P 


var isSquare = function(n){

//checks if the number is whole 
    return Math.sqrt(n) % 1 === 0 
    
  }


  console.log(isSquare(4))
