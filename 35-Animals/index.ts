let animals = ["Dog", "cat", "Parrot"];
for (let i=0; i<animals.length; i++){
    let animal1 = animals[i];
    console.log(animal1);
    switch (animal1){
        case "Dog":
            console.log("A dog would make a great pet");
            break;
        case "cat":
            console.log("A cat would make a great campanion");
            break;
        case "Parrot":
            console.log("A parrot is a beautidul and lovely pet")
            break;
        default:
            console.log("This animal is good")
    }
}
console.log("Any of these animals would make a great pet!")
