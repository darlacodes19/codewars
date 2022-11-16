//P an array of various data types
//R the same array with all the zeros to the end, don't change the order 
//E 
    //moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//P
//remove only zeros from the array
//place them in another array
//concatenate the arrays and return 




function moveZeros(arr) {
    
    let arrOZeros = []
    
    for (let i= 0; i<arr.length; i++) {

        if(arr[i] === 0) {
           arrOZeros.push(...arr.splice(i, 1)); 
            i--
            
        }
    }
   
    return arr.concat(arrOZeros)
  }


  console.log(moveZeros([ 9, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ]))