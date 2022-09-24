//P- An array of integers ( 3 or more elements) - all odd or even numbers - except one 
//R- return the NUMBER that is the outlier 
//E-
    //[2, 4, 0, 100, 4, 11, 2602, 36]
    // Should return: 11 (the only odd number)

    // [160, 3, 1719, 19, 11, 13, -21]
    // Should return: 160 (the only even number)`
//P
//how to know what the trend in the array is? 
//use the find method 


function findOutlier(integers){
    let even = 0;
    let odd = 0;

    for ( let i = 0; i<integers.length; i++){
        if (integers[i] % 2 == 0) {
            even++
            
        } else {
            odd ++

        }
    }
    

    if ( even > odd) {
        return integers.find(e => e % 2 !== 0)
    } else {
        return integers.find(e => e % 2 == 0)
    }
  }

  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))