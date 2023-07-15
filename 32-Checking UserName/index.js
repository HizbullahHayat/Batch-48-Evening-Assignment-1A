var current_users = ["Ali", "Hizbullah", "Umer", "Usman", "Abu Bakar"];
var new_users = ["Mark", "Ali", "Daron Acemoglu", "Hizbullah", "Marry Wolpertstine"];
for (var i = 0; i < current_users.length; i++) {
    if (new_users.includes(current_users[i])) {
        console.log("The username \"".concat(current_users[i], "\"is alredy taken. please enter a new username"));
    }
    else {
        console.log("the username\"".concat(current_users[i], "\" is avaliable"));
    }
}
