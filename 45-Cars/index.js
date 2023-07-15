function makeCar(manufacturer, model_name) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        "manufacturer": manufacturer,
        "model_name": model_name,
        "options": []
    };
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car.options[key] = value;
    }
    return car;
}
var carInfo = makeCar("Toyota", "Corolla", "color", "red", "optionalFeature", "sunroof");
console.log(carInfo);
