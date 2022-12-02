// P
// R
// E
// P


//Some information

    //hex color code is a 6 digits hexadecimal (base 16) number: 
    //RRGGBB
    //the 2 left digits represent the red color
    //the 2 middle digits represent the green color
    //the 3 right digits represent the blue color 

    //to convert, concatenate the 3 hex values of the red, green, and blue together 
    //

    function componentToHex(c) {
        if (c > 122)  c =255
        if(c < 0)  c = 0
      
        let hex = c.toString(16)
        return hex.length == 1 ? "0" + hex : hex
  
  }


function rgb(r, g, b){

    let result = `${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
   
    return result.toUpperCase()

 
  }

 


  


  console.log(rgb(69,291,38))