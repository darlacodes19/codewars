//P - a STRING
//R - a STRING w/ every letter 
//E - "The sunset sets at twelve o' clock." => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
//P - 

// Using indexOf

function alphabetPosition(text) {

    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
 

    return text.replace(/[^A-Z0-9]/ig, "").replace(/[0-9]/g, '').toLowerCase().split('').map(x => alphabet.indexOf(x) + 1).join(' ');
    

  

 

  




 }


  console.log(alphabetPosition('thanks'))

 //using charCodeAt

function alphabetPosition2(text)  {
  return text
  .replace(/[^A-Z0-9]/ig, "")
  .toLowerCase()
  .split('')
  .map(x => x.charCodeAt()-96)
  .join(' ')


}