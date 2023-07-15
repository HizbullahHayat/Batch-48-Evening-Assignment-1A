var magicians = ["Ronaldo", "Mark", "Trump", "Dani", "Pablo Picasoo"];
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        var greatMagician = magician + " the Great";
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var greatMagicians = makeGreat(magicians.slice()); // make a copy of the magicians array
showMagicians(magicians);
showMagicians(greatMagicians);
