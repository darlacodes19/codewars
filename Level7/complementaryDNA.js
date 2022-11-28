// P a string of letters ( A, T, G ,C)
// R - return a string with the complementary side 
// E - "ATTGC" --> "TAACG"
        //"GTAT" --> "CATA"
// P 

//loop over the string 
//use and if/else statement to switch 

//AC => TG


function DNAStrand(dna){

    //using an object 
    const pairs = {
        A : "T",
        T : "A",
        C : "G",
        G : "C"
    }

    return dna.replace(/./g, function (letter) {
            return pairs[letter]
    })

    //A 
    //T
    //C
    //G

    // let complementaryString = ""
    
    // for ( let i= 0 ; i< dna.length; i++) {

    //     if (dna[i] === 'A')  {
    //         complementaryString += "T"
    //     } else if (dna[i] === "T") {
    //         complementaryString += "A"
    //     }else if (dna[i] === "C") {
    //         complementaryString += "G"
    //     } else {
    //         complementaryString += "C"
    //     }
    // }

    // return complementaryString
    
  }

  // "TAACG"
  console.log(DNAStrand("ATTGC"))