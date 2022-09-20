//P- two arrays - numbers(values) or emoty- array 1= a ; array 2 = b 
//R- array a without the values in array 6
//E arrayDiff([1,2,2,2,3],[2]) == [1,3]
//P 

//Using a nested for loop 
function arrayDiff(a, b) {

const newArray = []

    for( let i = 0; i <a.length; i++) {
        for(let j = 0; j <b.length; j++) {
            if(a[i] !== b[j]) {
                newArray.push(a[i])
            }
        }
    }

    return newArray
}

// console.log(arrayDiff([1,2,2,2,3],[2])) 


//Another method 

function arrayDiff2(a, b) {

    const newArray = []
    
        for( let i = 0; i <a.length; i++) {
            for(let j = 0; j <b.length; j++) {
                if(a[i] !== b[j]) {
                    newArray.push(a[i])
                }
            }
        }
    
        return newArray
    }
    
    console.log(arrayDiff2([1,2,2,2,3],[2])) 