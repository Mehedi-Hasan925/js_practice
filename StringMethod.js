let str = "I love Bangladesh"
let str2 = str.slice(6,14) //slice(6,14) return the sliced string from 6 to 14
console.log(str2);

str2 = str.slice(-12,-6) //negative parameter work right to left
console.log(str2);


str2 = str.substring(6,14)
console.log(str2);

str3 = str.substr(7,8) //substr(start, length of slice)
console.log(str3);

console.log(str.toLowerCase()); //toLowerCase() convert lowercase
console.log(str.toUpperCase()); //toUpperCase() convert UpperCase

let text1 = "Hello";
let text2 = "World";
console.log(text1+" "+text2);
console.log(text1.concat(" "+text2)); //str.concat() concatenate the strings

console.log(str.trim()); //trim() method remove whitespace from both end of string

console.log(text1.split("")); //split convert a string into an array
