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