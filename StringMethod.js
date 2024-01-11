let str = "I love Bangladesh"
let str2 = str.slice(6,14) //slice(6,14) return the sliced string from 6 to 14
console.log(str2);

str2 = str.slice(-12,-6) //negative parameter work right to left
console.log(str2);


str2 = str.substring(6,14)
console.log(str2);