//P- 
    //An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
//R 
    //The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
//E
    //{1,2,3,4,3,2,1}: answer 3 
//P



function equalSideArray (array) {

    let minIndex = Infinity;

    for (let i=0; i<array.length; i++) {
        

        let rightTotal = array.slice(i+1).reduce((p,c) => p+ c, 0)
        let leftTotal = array.slice(0,i).reduce((p,c) => p+ c, 0)
    

        if (rightTotal === leftTotal) {
            return Math.min(minIndex ,i)
            
        }
      

    } return -1

    
    
}

console.log(equalSideArray([1,2,3,4,3,2,1]))

