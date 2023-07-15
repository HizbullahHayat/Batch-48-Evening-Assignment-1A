let magicians = ["Mark", "Putin", "Zelenski", "Biden","Trump"];
function show_magicians(magicians:string[]){
    for(let magician of magicians){
        console.log(magician)
    }
}
function make_great(magicians:string[]){
    for(let i=0; i<magicians.length; i++){
        magicians[i] += " the great";
    }
}
make_great(magicians);
show_magicians(magicians);
