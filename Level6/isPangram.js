// P - A string- a sentence
// R -  true if the string uses all the letters of the alphabet and false if it doesn't

// E 
// P 
    //remove all spaces from the string
    //lowercase all letters
    //







function isPangram (string) {

    let newString =  string.replace(/\s/g, '')

    let lhs = new Set ();

    for ( let i=0; i<newString.length; i++) {
        lhs.add(newString[i])
    }

    return lhs

    // for(let ch of lhs) {
    //     console.log(ch)
    // }

}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))