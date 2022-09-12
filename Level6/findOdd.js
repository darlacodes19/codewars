//goal- find the number that appears an odd number of times 
//There will always be only one integer that appears an odd number of times.

//P
    // An ARRAY of Integers 
//R
    //Return the NUMBER/INTEGER that appears an odd number of times ( how to count how many times a number appears?)
//E
    //[7] should return 7, because it occurs 1 time (which is odd).
    // [0] should return 0, because it occurs 1 time (which is odd).
    // [1,1,2] should return 2, because it occurs 1 time (which is odd).
    // [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
    // [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//P
    //Loop through the array 


    //forEach method calls a function on each element of the array 


  function findOdd(A) {

    //key- value pair - where key is the number and value is the number of times it appears 
    //with objects keys are always strings with map any typ of key is possible 
    //Create a new map 
    const map = new Map ();

    for (let i=0; i<A.length; i++) {
        if(!map.has(A[i])) {
            map.set(A[i],1); // 1:1
        } else {
            map.set(A[i], map.get(A[i]) +1) // 1: 2
        }
    }

    for (let [key, value] of map) {
        if (value % 2 !==0) {
            return key
        }
    }
    
  }

//   console.log(findOdd([1,1,2]))

//map stores key-value pairs
const practiceMap = new Map();


//.set => stores the value by key => storing the value of 25 and the key is darlene/name
practiceMap.set('Darlene', 25)
practiceMap.set('Johnny', 15)
practiceMap.set('Denisse', 22)
practiceMap.set('celi', 19)

//.get => returns the value by the key if you want to get the value search by key





console.log(practiceMap.size)