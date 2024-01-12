let country = "Bangladesh";
let sentence = `I love ${country} and I want to live ${country} until death.`;
console.log(sentence);



let a = 11;
let b = 7;
let population = `Population of ${country} is ${a+b} crore`;
console.log(population);


let myNum = 35
console.log(myNum.toString(8)); //toString method convert the number into given base. default base is 10
console.log(myNum.toString(16));
console.log(myNum.toString(2));


let num2 = 9748938
console.log(num2.toExponential(2)); //toExponential(n) convert the number into exponent by getting n digit after radix point.



const fruits = ["Banana","Apple","JackFriits"];
fruits.push("Lemon");
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

let len = fruits.length;
text = `<ul>`;
for(let i=0;i<len;i++)
{
    text += `<li>${fruits[i]}</li>`
}
text += `</ul>`
document.getElementById('demo').innerHTML = text;




let html = `<ul>`;
function myFunction(val) {
    html +=`<li>${val}</li>`
}
fruits.forEach(myFunction);
document.getElementById("demo2").innerHTML = html;


let popped = fruits.pop();
console.log(popped);
console.log(fruits);


fruits.splice(2,0,"Orange","Guava","Ripe"); //splice method add elements to an array
console.log(fruits);



fruits.sort(); //sort an array and alter the main array
console.log(fruits);
fruits.reverse(); //reverse an array and alter the main array
console.log(fruits);

let sorted = fruits.toSorted(); //sort an array and return the new array and does not change main array
console.log(sorted);
console.log(fruits);

let reversed = fruits.toReversed(); //reverse an array and does not change the main array
console.log(reversed);



// sort ascending numeric value
let numArray = [40,10,30,100,150,124];
numArray.sort(function(a,b) { 
    return a-b;
});
console.log(numArray);

// sort descending numeric value
numArray.sort(function(a,b) { 
    return b-a;
});
console.log(numArray);

//max and min value without array sort
function maxValueFromArray(arr) {
    return Math.max.apply(null,arr);
}
let max = maxValueFromArray(numArray);
console.log(max);