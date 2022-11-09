//P a string of words 
//R a number - the length of the shortest string
//E
//P 
    // Steps
    // split the string into an array of words
    // loop through the array 
    //at each index check the length and compare with the next one 
    //return the length of the shortest one 



function findShort(string){

const arrayOfWords = string.split(' ')
let lenghtOfString = Infinity

for (let i =0; i<arrayOfWords.length; i++) {
    if(arrayOfWords[i].length < lenghtOfString){
        lenghtOfString = arrayOfWords[i].length
    }


}

return lenghtOfString
}

// console.log(findShort('Hello my name'))

function findShort2(string){

    const arrayOflengths =  string.split(' ').map(word => word.length)

    return Math.min(...arrayOflengths)
    
}
    
    console.log(findShort2('Hello my name'))