//P -  a string
//R - string with a space where the camleCase happens 
//E 
    //"camelCasing"  =>  "camel Casing"
    //"identifier"   =>  "identifier"
    //""             =>  ""

//P




function solution (string) {


    // if (string === "") return ""

    // for (let i =0 ; i<string.length; i++) {
    //     if (string[i] === string[i].toUpperCase()) {
    //         return string.split("")
    //     }
    // }


    return string.split(/(?=[A-Z])/).join(' ')

    
}

console.log(solution("camelCaseTest"))