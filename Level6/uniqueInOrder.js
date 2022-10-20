//P- A sequence/Iterable, can be a string or array
//R- an array- a list of elements with the same order but no elements with the same value next to eachother 
//E

//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//P

function unique_in_order (iterable) {

    let finalResult = [];
    
    for (let i=0; i<iterable.length; i++){
        
        if(iterable[i] !== iterable[i+1]) {
            finalResult.push(iterable[i])

        } 

    }

    return finalResult
}

// console.log(unique_in_order('AAAABBBCCDAABBB'))

//Try and solve with the filter method

function unique_in_order2 (iterable) {

    
    

    return [...iterable].filter( (element, index) => element !== iterable[index+1])

    //why use the spread operator? 
        //its going to spread the string each letter into an array 
}

console.log(unique_in_order2([1,2,3]))