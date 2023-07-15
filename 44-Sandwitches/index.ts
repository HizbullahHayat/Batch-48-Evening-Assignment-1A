function makeSandwitch(items:string[]){
    console.log("I'll make a great sandwitch for you");
    for(const item of items){
        console.log("Adding "+ item + " to your Sandwitch")
    }
    console.log("Your sandwitch is ready");
}

makeSandwitch(["Ketchup", "Cheese","mayonees"])
makeSandwitch(["Salt", "Coco powder", "spices"])