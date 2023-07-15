let locations = ["Russia", "Brazil", "US", "Canada","Iran","KSA","China"];
console.log(locations);
let sortedArray = locations.slice()     //a copy of origional array to save origional copy of array
let alphabatically = sortedArray.sort();
console.log("Array in Alphabatic order")
console.log(alphabatically)    //array in alphabatical order
console.log(locations)      //array in it's origional form
//to print array in reverse without effecting origional array
let reverse = locations.slice();
reverse.sort();
reverse.reverse();
console.log("Reverse array is : ", reverse)
//array still in origional form
console.log("Origional array :", locations)
//reverse order of array while changing origional array
locations.reverse();
console.log("The reverse array : ", locations)
//reverse again to convert it again to its origional form
locations.reverse();
console.log("Reversed array, back to origional form : ", locations)
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort();
console.log("Sorted array, with changed order : ", locations)
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
locations.sort();
locations.reverse();
console.log("Sorted and reversed order array : ",locations)
