//P - a string
//R - a string 
//E
    //'world'  =>  'dlrow'
    //'word'   =>  'drow'
//P
    //loop through string starting at the end 
    //add it to another variable

    //more helpful solutions

   // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

function solution(str){

    //difference between str.lnegth and >=
    //

    let reversedString=""

    for (let i=str.length-1; i>=0; i--){
        reversedString += str[i]
        
        
    } 
    return reversedString

   

   
    
  
}

console.log(solution("dream"))