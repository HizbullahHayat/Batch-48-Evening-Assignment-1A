// • Tests for equality and inequality with strings
var a = "hello world";
var b = "HELLO WORLD";
console.log(a === b); //false
console.log(a !== b); //true
// • Tests using the lower case function
console.log(a === b.toLocaleLowerCase()); //true
console.log(a !== b.toLocaleLowerCase()); //false
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(55 === 55);
console.log(82 < 65);
console.log(44 > 56);
console.log(44 >= 55);
// • Tests using "and" and "or" operators
console.log(true && true);
console.log(false || false);
// • Test whether an item is in a array
var languages = ["Urdu", "hindko", "Bangali", "Pashtoo", "Persian"];
console.log(languages.includes("hindko"));
console.log(languages.includes("Urdu"));
// • Test whether an item is not in a array
console.log(languages.includes("English"));
console.log(languages.includes("Pahari"));
