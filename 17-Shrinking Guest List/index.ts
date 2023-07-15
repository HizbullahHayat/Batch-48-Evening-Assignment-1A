let guestList = ["Ali", "Hamza", "Usman"];
let message = " you are invited on dinner at 9'o clock, on 14th August at Air University cafe";
for(let i=0 ; i<guestList.length; i++){
    console.log(guestList[i] + message)
}

console.log("Mr. Usman is unable to attend dinner, due to personel reasons")
guestList.splice(2,1,"Hizbullah");
for(let i=0 ; i<guestList.length; i++){
    console.log(guestList[i] + message)
};

console.log("We found a bigger dinner table");
guestList.splice(0,0,"Imran");
guestList.splice(2,0,"Nawaz")
guestList.push("Rizwan")
let message2 = " you are invited on dinner at 9'o clock, on 14th August at Air University cafe"
for(let i=0; i<guestList.length; i++){
    console.log("Hi Mr. "+ guestList[i] + message2)
}


console.log(guestList)


console.log("We can invite only two peoples for dinner");
let message3 = " We are sorry but we can't invite you on dinner";
while(guestList.length>2){
    let removedGuests = guestList.pop();
    console.log("Mr. "+removedGuests+ message3)
}
for (let i=0; i<guestList.length; i++){
    console.log("Mr. "+guestList[i]+ " You are still on Guest list")
}
while(guestList.length = 0){
    guestList.pop();
}
console.log(guestList);