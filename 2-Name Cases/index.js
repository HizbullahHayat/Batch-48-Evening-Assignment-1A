var myName = "Hizbullah Hayat";
var upperCase = myName.toUpperCase();
console.log("Name in Upper Case :", upperCase);
var lowerCase = myName.toLowerCase();
console.log("Name in Lower Case :", lowerCase);
function toTitleCase(myName) {
    return myName.replace(/\b\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
var titleCase = toTitleCase(myName);
console.log("Name in Title Case: ", titleCase);
