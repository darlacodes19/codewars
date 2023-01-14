//P - a string
//R - a string 
//E
    //'world'  =>  'dlrow'
    //'word'   =>  'drow'
//P
    //loop through string starting at the end 
    //add it to another variable


function solution(str){

    let reversedString= ""

    for (let i=str.length-1; i<str.length; i--){
        reversedString+=i
    }

    return reversedString
  
}

console.log(solution("dream"))