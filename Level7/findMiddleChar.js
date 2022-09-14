//P
    //A string of any length 
//R
    //The middle character of the word as a string, if number is even return the middle two characters 
//E
    // Kata.getMiddle("test") should return "es"

    // Kata.getMiddle("testing") should return "t"

    // Kata.getMiddle("middle") should return "dd"

    // Kata.getMiddle("A") should return "A"
//P
    //1-If the length of the string is odd divide the length of the string by 2, you want to slice the string at that point

function getMiddle(s){

    let stringLength = s.length
    
    if (stringLength % 2 !== 0) {
        let value = Math.round(stringLength / 2) - 1
        
       return  s.slice(value , value+1)
    } else {

        let value = (stringLength/2) -1 
        
        return s.slice(value,value+2)

    }
 
}

// console.log(getMiddle('middle'))

// Solved using terinary operator 

function getMiddle2(s){

    const middle  = Math.round(s.length  / 2) -1

return s.length % 2 !== 0 ? s.charAt(middle) : s.slice(middle , middle + 2) 
 
}

console.log(getMiddle2('test'))