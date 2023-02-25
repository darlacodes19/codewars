// Write calculations using functions and get the results

// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
//eight(dividedBy(three()));


//operands might get one or two arguments
//operator will always get one argument, an operand ( a number) 

function zero() {}
function one() {


    if(arguments.length == 0 ) {
        return 1
    } else {
        if(arguments[0] === "+") {
            return 1 + arguments[1]
        }
    }
    //if no arguments 
    //return the number
    //if 2 arguments 
        //do , number , operator, and second number 

        //how do you access arguments in JS 
            //with the arguments object. Each non-arrow function has access to the arguments object, an array like object. 
}
function two() {
    if(arguments.length == 0 ) {
        return 2
    } else {
        if(arguments[0] === "+") {
            return 2 + arguments[1]
            
        }
    }
}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {
    return  `+ ${arguments[0]}`
}
function minus() {}
function times() {}
function dividedBy() {}


console.log(one(plus(two())))