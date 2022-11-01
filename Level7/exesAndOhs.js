// P
    // string of letters
    //can be just x's and o's 
    //but also other letters
// R
    //a boolean
    //true if the same amount of os and xs 
    //false if not the same ammount 
    //when no x or o are present should return true 
// E
    // "ooxx" => true 
    //"xox" => false
    //"zzoo" false 
// P
//first method: 
    //declare and initialize two variables to keep track of x's and o's count
    // loop through the string
    //add 1 if the string[i] is x and do the same for o
    //compare both variables
    //if equal return true
    //if not return false 

//second method
    //create a map 


function XO (str) {

let x = 0;
let o = 0;

let lowerCase = str.toLowerCase()

for (let i = 0; i<lowerCase.length; i++) {

    if(lowerCase[i] === "x") {
        x+=1
    } else if (lowerCase[i] === "o") {
        o+=1
    }
}


return x === o ? true: false
}


console.log(XO(""))