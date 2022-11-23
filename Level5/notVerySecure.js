//P a STRING
//R a boolean True if the string is alphanumeric false if not 
//E "Mazinkaiser"), true
//P

//what does alphanumeric mean ?
// At least one character ("" is not valid) => false 
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore



function alphanumeric(string){
    const regex = /^[0-9a-zA-Z]+$/;

    return string.match(regex) ? true: false 
    




  }
  console.log(alphanumeric("    "))

