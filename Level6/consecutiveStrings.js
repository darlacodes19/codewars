//P - an array of strings and integer(k)
//R - first longest string consisting of k consecutive strings taken in the array.
//E
    // Edge cases
    //What happens if k = 0 ?
    //What happens when K = -number ?
    //What happens when k > array.length ?
//P


//strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2


function longestConsec(strarr, k) {
    //length of the window = k 
let windowStart = 0;
let lengthOfStrings = -Infinity
let firstLongestString = ""

for(let windowEnd = 0; windowEnd<strarr.length; windowEnd++) {
    if (windowEnd >= k-1) {
        //concatenate strings
        //record length
        //comapre lengths 
        firstLongestString = strarr[windowEnd]+ strarr[windowEnd+1]
        // lengthOfStrings = firstLongestString.length

        if(lengthOfStrings < firstLongestString.length) {
            return firstLongestString
        }else {
            lengthOfStrings = firstLongestString.length
            windowStart++
        }
    }

}

return firstLongestString

}
//"folingtrashy"
console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))