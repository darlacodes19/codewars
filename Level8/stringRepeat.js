// P two- an integer and a string
// R one- a string 
// E

    // 6, "I"     -> "IIIIII"
    // 5, "Hello" -> "HelloHelloHelloHelloHello"
// P

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


function repeatStr (n, s) {

    let string=""

    for (let i=0; i<n; i++){
        string+=s
    }
    return string;
  }


  console.log(repeatStr(6, "I"))


