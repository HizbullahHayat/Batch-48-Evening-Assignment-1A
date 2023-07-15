var userName = ["admin", "eric", "mark", "newton", "elon musk"];
for (var i = 0; i < userName.length; i++) {
    if (userName[i].includes("admin")) {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello", userName[i], "thank you for logging in again.");
    }
}
