// P
 // two parameters: an array of integers and a single integer(n)
// R
    // an array , except the numbers can only repeate n times 
// E
    //[1,2,3,1,2,1,2,3], 2 =>  [1,2,3,1,2]
    // a number can not appear more than twice
// P
// create a map of each number 
// add the number to the map so it only appears n times
//I'm using map so I can keep track of how many times each item appears  




function deleteNth(arr,n){

  //create a new map object

  const map = new Map()

  //loop through the array
  for (let i = 0; i<arr.length; i++) {
  // check if element is in map
  //if not in map 
  //add it to the map with a value of 1 

  if(!map.has(arr[i])) {
      //map.set requires you to add a key and a value
      map.set(arr[i],1 )
  } else {

      map.set(arr[i], map.get(arr[i]) +1) // 1: 2

      }
  }

  let newArray = []

  for (let [key, value] of map) {

    
      
  }
  
 
  return newArray

    

    
    
  }


  console.log(deleteNth([1,2,3,1,2,2,2], 2))

