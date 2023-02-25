//P - two paramters- two strings 
//R -  a boolean 
//E - returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//P
//loop through second string
//check if each letter of second string matches letters in first string 
// assert.strictEqual(scramble('rkqodlw',           'world'      ), true );
//     assert.strictEqual(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
//     assert.strictEqual(scramble('katas',             'steak'      ), false);
//     assert.strictEqual(scramble('scriptjavx',        'javascript' ), false);
//     assert.strictEqual(scramble('scriptingjava',     'javascript' ), true );
//     assert.strictEqual(scramble('scriptsjava',       'javascripts'), true );
//     assert.strictEqual(scramble('javscripts',        'javascript' ), false);
//     assert.strictEqual(scramble('jscripts',          'javascript' ), false);
//     assert.strictEqual(scramble('aabbcamaomsccdd',   'commas'     ), true );
//     assert.strictEqual(scramble('commas',            'commas'     ), true );
//     assert.strictEqual(scramble('sammoc',            'commas'     ), true 




function countStr (str) {
    //create an instnce of an object 
    const obj = {};
    for (const letter of str) {
        obj[letter] = (obj[letter] || 0) + 1;
    }
    return obj;
}

function sortObject (obj) {
    return Object.keys(obj).sort()
}

function scramble(str1, str2) {

    
    const [obj1 , obj2] = [str1 , str2].map(countStr)
    
    const newObj1 = sortObject(obj1)
    const newObj2 = sortObject(obj2)

    return newObj1 === newObj2
   


  }

  console.log(scramble('katas','steak') )

//   console.log(countStr("hello"))
  