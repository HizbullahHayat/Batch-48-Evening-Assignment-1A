let myName = "Hizbullah Hayat";
let upperCase = myName.toUpperCase();
console.log("Name in Upper Case :", upperCase);
let lowerCase = myName.toLowerCase();
console.log("Name in Lower Case :", lowerCase);

function toTitleCase(myName: string) {
    return myName.replace(/\b\w+/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
let titleCase =toTitleCase(myName);
console.log("Name in Title Case: ", titleCase);