function describe_city(city, country) {
    if (city === void 0) { city = "Unknown"; }
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi", "Pakistan");
describe_city("Istambul", "Turkyee");
describe_city("Sofala");
