function makeCar(manufacturer:string, model_name:string, ...options:string[]){
   const car = {
        "manufacturer" : manufacturer,
        "model_name" : model_name,
        "options": []
    }
    for (let i=0; i<options.length; i+=2){
        const key = options[i];
        const value= options[i + 1];
        car.options[key]= value;
    }
    return car;
}

const carInfo = makeCar("Toyota", "Corolla", "color", "red", "optionalFeature", "sunroof");
console.log(carInfo)