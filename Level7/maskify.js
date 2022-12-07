
// P a string 
// R a string 
     //only the last four letters showing and the other letters as #
// E 
    // "4556364607935616" --> "############5616"
    // "64607935616" -->      "#######5616"
    //           "1" -->                "1"
    //            "" -->                 ""
// P
    //if string is empty return string
    //if string is length = 1 return string 





// return masked string
function maskify(cc) {

    if (cc.length === 1) return cc

    let maskedString = ""
    let rest = cc.slice(-4)

    for (let i=0; i<cc.length-4; i++) {
        maskedString+="#"
    }


    return  `${maskedString}${rest}`

}

console.log(maskify(""))




