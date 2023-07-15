var ordinal_numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinal_numb.length; i++) {
    var number = ordinal_numb[i];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(number + ordinal);
}
