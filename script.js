let name = " john doe";
let trimmedText = name.trim();
//the trim() method removes whitespace from the both side
console.log(trimmedText);

//splitting astring into an array

const data = "this is a string which will split into array";

const splittedData = data.split("");
console.log(splittedData);


const something = "javascript";
//slice extract  the part of the string , it take 2 parameter lst is the position and second is the ending position and ending position is not include

const newData = something.slice(0,7);
console.log(newData);