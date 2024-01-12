let numArray2 = [45,112,15,20,17,38,34,36];
function myFunction(value,index,array) {
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("------");
}

// numArray2.forEach(myFunction);

// arrow function 
numArray2.forEach((value,index,array)=>{ //foreach function alter the main array.
    console.log(value);
    console.log(index);
    console.log(array);
});



// array.map function doesn't alter the main array. It creates a new array
let num1 = [40,13,24,28,17,29]
let newNum = num1.map((value,index,array)=>{
    return value*2;
})
console.log(newNum);


//array.reduce function create the sum of all array element by taking an extra parameter
let reduced = num1.reduce((total,value,index,array)=>{
    return total+value;
})
console.log(reduced);


//array.every() method checks if all the array value is pass the condition or not
let allPass = num1.every((value,index,array)=>{
    return value>15;
})
console.log(allPass);


//array.keys() method return the array iterator of keys.
let key = num1.keys();
for (let i of key) {
    console.log(i);
}
