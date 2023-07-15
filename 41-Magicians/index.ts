let magicians = ["Mark", "Putin", "Zelenski", "Biden","Trump"];
function show_magicians(magicians: string | any[]){
    for(let i=0; i<magicians.length; i++){
        console.log(magicians[i])
    }
}
show_magicians(magicians)
