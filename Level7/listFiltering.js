//P
    // an array of positive integers and strings 
//R
    //a new array with only the positive integers 
//E
    //filter_list([1,2,'a','b']) == [1,2]
    // filter_list([1,'a','b',0,15]) == [1,0,15]
    // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
//P
    //use the array filter method 
    //check data type 
    //only return if data type is Numbers
        //how do you check what the datatype is? 
        //syntac of typeOf operator is: 
            //typeof operand 

function filter_list(list) {

    return list.filter(e => typeof e === 'number')
    
  }


  console.log(filter_list([1,2,'a','b']))