//P A string seperated by a dash or an  underscore 
//R A string, each word seperated by the underscore should be capitalized. Only capitalize the      first word if its originnaly capitalized.
//E "the-stealth-warrior" gets converted to "theStealthWarrior"
   //"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//P  

function toCamelCase(str){

    return str.replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr)
    {
        return chr.toUpperCase();
    });
}



const testScores = [78,90,62,88,93,50]

const indexOfHighestScore = testScores.indexOf(93)

console.log(indexOfHighestScore)

testScores[5] = 71
console.log(testScores[5])
    













// console.log(toCamelCase("The-stealth-warrior"))